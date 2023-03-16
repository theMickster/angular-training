import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BeerType } from 'src/app/models/beerType';

@Injectable({
  providedIn: 'root'
})
export class BeerTypeService {

  constructor() { }

  getBeerTypes(): Observable<BeerType[]>{
    return new[];
  }
}
