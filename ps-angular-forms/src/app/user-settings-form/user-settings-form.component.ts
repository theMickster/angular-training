import { Component, OnInit } from '@angular/core';
import { IUserSettings } from '../model/user-settings';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {

  userSettings: IUserSettings = {
    emailAddress: '',
    username: '',
    firstName: '',
    lastName: '',
    city: '',
    state: '',
    zip: '',
    weeklyNewsletter: false,
    clearanceSales: false,
    dailySpecials: false,
    membershipType: '',
    userInterfaceStyle: '',
    notes: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

}
