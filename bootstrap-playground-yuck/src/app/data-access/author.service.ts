import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Author } from '../data-structures/models/Author';
import { AuthorDto } from '../data-structures/dtos/AuthorDto';

@Injectable({
  providedIn: 'root',
})
export class AuthorService {
  private authorsUrl = 'api/authors';

  constructor(private http: HttpClient) {}

  authors$ = this.http.get<AuthorDto[]>(this.authorsUrl).pipe(
    // tap((data) => console.log('AuthorDtos: ', JSON.stringify(data))),
    map((authorDtos) =>
      authorDtos.map(
        (authorDto) =>
          ({
            authorId: authorDto.id,
            authorCode: authorDto.authorCode,
            firstName: authorDto.firstName,
            lastName: authorDto.lastName,
            phoneNumber: authorDto.phoneNumber,
            address: authorDto.address,
            city: authorDto.city,
            state: authorDto.state,
            zipCode: authorDto.zipCode,
            isUnderContract: authorDto.contract,
            fullName: authorDto.firstName + ' ' + authorDto.lastName,
          } as Author)
      )
    ),
    catchError(this.handleError)
  );

  private handleError(err: any): Observable<never> {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }
}
