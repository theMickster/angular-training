import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormlyFieldConfig, FormlyFormOptions} from '@ngx-formly/core';
import { Observable, of } from 'rxjs';
import { LanguageService } from '../services/language.service';
import { Language } from '../models/language';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent  implements OnInit {
  form = new FormGroup({});
  model = { email: '', lastName: '', firstName: '' };
  options: FormlyFormOptions = {};

  languages: Language[] = [];
  selectedLanguage: Language;

  fields: FormlyFieldConfig[] = [
    {
      id: 'txtInputFirstName',
      name: 'textBoxInputFirstName',
      key: 'firstName',
      type: 'input',
      props: {
        label: 'First name',
        placeholder: 'Kindly enter your first name',
        required: true
      },
      validators: {
        name: {
           expression: (c: { value: string | any[]; }) => !c.value || c.value.toString().trim().length >= 2,
           message: (error: any, field: FormlyFieldConfig) =>
                    'Name should be greater than 2 characters'
        }
      }
    },
    {
      id: 'txtInputLastName',
      name: 'textBoxInputLastName',
      key: 'lastName',
      type: 'input',
      props: {
        label: 'Last name',
        placeholder: 'Kindly enter your last name',
        required: true
      },
      validators: {
        name: {
           expression: (c: { value: string | any[]; }) => !c.value || c.value.toString().trim().length >= 2,
           message: (error: any, field: FormlyFieldConfig) =>
                    'Name should be greater than 2 characters'
        }
      }
    },
    {
      id: 'txtInputEmail',
      name: 'textBoxInputEmail',
      key: 'email',
      type: 'input',
      props: {
        label: 'Email address',
        placeholder: 'Enter email',
        required: true,
      }
    },
    {
      id: 'selectListFavoriteSport',
      key: 'sport',
      type: 'select',
      templateOptions: {
        label: 'Sport',
        options: this.getSports(),
        valueProp: 'id',
        labelProp: 'name'
      }
    }
  ];

  constructor(private languageService: LanguageService) {
    this.selectedLanguage = { id: 'CBAD4BAE-5315-4DE8-8013-3DE9EEBA354A', name: 'English', isoTwoDigitCode: 'en', isoThreeDigitCode: 'eng' };
  }

  ngOnInit(): void {
    this.languageService.getLanguages().subscribe( x => this.languages = x);
  }

  onSubmit() {

    console.log(this.model);

  }

  onSelectedLanguageChanged(arg: any) {
   console.log(arg);
  }

  getSports(): Observable<any[]> {
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
