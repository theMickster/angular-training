import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Sport } from '../models/sport';

@Injectable({
  providedIn: 'root'
})
export class SportService {

  getSports(): Observable<Sport[]> {
    const sports = [
      {
        id: 1,
        name: 'Baseball'
      },
      {
        id: 2,
        name: 'Football'
      },
      {
        id: 3,
        name: 'Hockey'
      },
      {
        id: 4,
        name: 'Golf'
      },
      {
        id: 5,
        name: 'Basketball'
      },
      {
        id: 6,
        name: 'Tennis'
      },
      {
        id: 7,
        name: 'Pickleball'
      },

    ]

    return of(sports);
  }
}
