import { Component } from '@angular/core';
import { catchError, EMPTY, Subject, tap } from 'rxjs';
import { AuthorService } from '../../../data-access/author.service';
import { Author } from '../../../data-structures/models/Author';

@Component({
  selector: 'author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css'],
})
export class AuthorListComponent {
  pageTitle = 'Author List';
  errorMessage = '';
  authors: Author[] = [];

  constructor(private authorService: AuthorService) {}

  authors$ = this.authorService.authors$.pipe(
    tap((data) => console.log('Authors: ', JSON.stringify(data))),
    catchError((err) => {
      this.errorMessage = err;
      return EMPTY;
    })
  );
}
