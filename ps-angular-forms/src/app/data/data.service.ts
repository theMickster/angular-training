import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { UserSettings } from "../model/user-settings";

@Injectable({
  providedIn: 'root'
})

export class DataService{

  constructor(private http: HttpClient) { }

  updateUserSettings(userSettings: UserSettings) : Observable<UserSettings> {

    return this.http.post<UserSettings>('url', userSettings);

    //return of(userSettings);
  }


}
