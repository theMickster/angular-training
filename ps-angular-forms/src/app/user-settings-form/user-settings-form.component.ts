import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder  } from '@angular/forms';
import { DataService } from '../data/data.service';
import { UserSettings } from '../model/user-settings';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {

  userSettings: UserSettings = {
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

  userSettingsForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private dataSvc: DataService) {
    this.userSettingsForm = this.createFormGroup();
  }

  createFormGroup(){
    let emailAddress = new FormControl();
    let username = new FormControl();
    let firstName = new FormControl();
    let lastName = new FormControl();
    let city = new FormControl();
    let state = new FormControl();
    let zip = new FormControl();
    let weeklyNewsletter = new FormControl();
    let clearanceSales = new FormControl();
    let dailySpecials = new FormControl();
    let membershipType = new FormControl();
    let userInterfaceStyle = new FormControl();
    let notes = new FormControl();

    return new FormGroup({
      emailAddress: emailAddress,
      username: username,
      firstName: firstName,
      lastName : lastName,
      city: city,
      state: state,
      zip: zip,
      weeklyNewsletter: weeklyNewsletter,
      clearanceSales: clearanceSales,
      dailySpecials: dailySpecials,
      membershipType: membershipType,
      userInterfaceStyle: userInterfaceStyle,
      notes: notes
    });
  }

  ngOnInit(): void {

  }

  onRevert(){
    console.log('In the onRevert() method...');
    console.log('onRevert before - this.userSettings:', this.userSettings);
    console.log('onRevert before - this.userSettings:', this.userSettingsForm.value);

    this.userSettingsForm.reset();

    console.log('onRevert after - this.userSettings:', this.userSettings);
    console.log('onRevert after - this.userSettingsForm.value:', this.userSettingsForm.value);
  }

  onSubmit()
  {
    console.log('In the onFormSubmit() method...');

    this.userSettings = Object.assign({}, this.userSettingsForm.value);

    console.log('Submitted Data in FromGroup...', this.userSettingsForm.value);
    console.log('Submitted Data in TypeScript Class...', this.userSettings);

    this.dataSvc.updateUserSettings(this.userSettings).subscribe(

      result => console.log('successful data update', result),
      error => console.log('error occurred: ', error)
    );
  }

  onGetSettingsData(){
    console.log('In the onGetSettingsData() method...');
    console.log('Submitted Data in FromGroup...', this.userSettingsForm.value);
    console.log('Submitted Data in TypeScript Class...', this.userSettings);
  }
}
