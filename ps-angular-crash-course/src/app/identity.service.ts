import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IdentityService {
  public username: string = '';
  public isLoggedIn: boolean = false;

  constructor() { }
}
