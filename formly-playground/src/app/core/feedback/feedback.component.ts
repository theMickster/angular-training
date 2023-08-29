import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {FormlyFieldConfig, FormlyFormOptions} from '@ngx-formly/core';
import { LanguageService } from '../services/language.service';
import { Language } from '../models/language';
import { SportService } from '../services/sport.service';
import { Sport } from '../models/sport';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent  implements OnInit {
  private formLanguageKey = 'selectedFormLanguage';
  private defaultLanguage: Language = { id: 'CBAD4BAE-5315-4DE8-8013-3DE9EEBA354A', name: 'English', isoTwoDigitCode: 'en', isoThreeDigitCode: 'eng', direction: 'ltr' };

  languages: Language[] = [];
  sports: Sport[] = [];

  selectedLanguage: Language = this.defaultLanguage;
  languageForm = this.formBuilder.group({ language: '' });;
  languageDirection = this.defaultLanguage.direction;

  form = new FormGroup({});
  model = { email: '', lastName: '', firstName: '', sport: null };
  options: FormlyFormOptions = {};

  fields: FormlyFieldConfig[] = [];

  constructor(private sportService: SportService,  private languageService: LanguageService, private formBuilder: FormBuilder) {
    let cachedFormLanguage = localStorage.getItem(this.formLanguageKey);
    if(!cachedFormLanguage) {
      this.selectedLanguage = this.defaultLanguage;
      localStorage.setItem(this.formLanguageKey, JSON.stringify(this.selectedLanguage));
    }
    else{
      this.selectedLanguage = JSON.parse(cachedFormLanguage);
    }
  }

  ngOnInit(): void {
    this.sportService.getSports().subscribe(x => {this.sports = x;});

    this.languageService.getLanguages().subscribe( x => {
      this.languages = x;
      this.languageForm.get('language')!.setValue(this.selectedLanguage.id);
    });

    this.setFormlyFields();
  }

  onSubmit() {
    console.log(this.model);
  }

  onSelectedLanguageChanged(arg: any) {
   this.selectedLanguage = this.languages.find( lang => lang.id === arg) ?? this.defaultLanguage;
   localStorage.setItem(this.formLanguageKey, JSON.stringify(this.selectedLanguage));
   this.languageDirection = this.selectedLanguage.direction;
  }

  setFormlyFields() {
   this.fields = [
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
        },
        hooks: {
          onInit: (field: FormlyFieldConfig) => {
            if(field.props){
              field.props.label = 'First name label updated!';
            }
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
      }
      // ,
      // {
      //   id: 'selectListFavoriteSport',
      //   key: 'sport',
      //   type: 'select',
      //   templateOptions: {
      //     label: 'Sport',
      //     options: this.getSports(),
      //     valueProp: 'id',
      //     labelProp: 'name'
      //   }
      // }
    ];
  }

}
