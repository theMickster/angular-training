import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {FormlyFieldConfig, FormlyFormOptions} from '@ngx-formly/core';
import { LanguageService } from '../../services/language.service';
import { Language } from '../../models/language';
import { SportService } from '../../services/sport.service';
import { Sport } from '../../models/sport';
import { LabelLanguageMapping } from '../../models/labelLanguageMapping';
import { BehaviorSubject, combineLatest, mergeMap, switchMap } from 'rxjs';

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

  languageForm = this.formBuilder.group({ language: '' });;
  languageDirection = this.defaultLanguage.direction;

  private selectedLanguage: Language = this.defaultLanguage;
  private selectedLanguageSubject = new BehaviorSubject(this.selectedLanguage);
  public selectedLanguage$ = this.selectedLanguageSubject.asObservable();

  firstNameLabelMap: LabelLanguageMapping = {} as LabelLanguageMapping;
  lastNameLabelMap: LabelLanguageMapping = {} as LabelLanguageMapping;
  emailLabelMap: LabelLanguageMapping = {} as LabelLanguageMapping;

  form = new FormGroup({});
  model = {id: 'a620dc05-a600-4113-bc04-dc032c3a78a9', email: '', lastName: '', firstName: '' };
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

    const languages$ = this.languageService.getLanguages();

    languages$.subscribe( x => {
      this.languages = x;
      this.languageForm.get('language')!.setValue(this.selectedLanguage.id);
    });

    this.setFormlyFields();
    this.languageDirection = this.selectedLanguage.direction;
    this.selectedLanguageSubject.next(this.selectedLanguage);
  }

  onSubmit() {
    console.log(this.model);
  }

  onSelectedLanguageChanged(arg: any) {
   this.selectedLanguage = this.languages.find( lang => lang.id === arg) ?? this.defaultLanguage;
   localStorage.setItem(this.formLanguageKey, JSON.stringify(this.selectedLanguage));
   this.languageDirection = this.selectedLanguage.direction;
   this.selectedLanguageSubject.next(this.selectedLanguage);
  }

  setFormlyFields() {
   this.fields = [
    {
      key: 'id'
    },
      {
        id: 'txtInputFirstName',
        name: 'textBoxInputFirstName',
        key: 'firstName',
        type: 'input',
        props: {
          label: 'First name',
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
              this.selectedLanguage$
              .pipe(mergeMap(lang => this.languageService.getFirstNameLabel(lang.id)))
              .subscribe(mapping => {
                field.props!.label = mapping.labelText
              });
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
              this.selectedLanguage$
              .pipe(mergeMap(lang => this.languageService.getLastNameLabel(lang.id)))
              .subscribe(mapping => {
                field.props!.label = mapping.labelText
              });
            }
          }
        }
      },
      {
        id: 'txtInputEmail',
        name: 'textBoxInputEmail',
        key: 'email',
        type: 'input',
        expressions: {
          'props.disabled':(field: FormlyFieldConfig) => {
            return !field.model.firstName
          }
        },
        props: {
          label: 'Email address',
          required: true,
          attributes: {
            "data-cy": 'emailOverride'
          }
        },
        hooks: {
          onInit: (field: FormlyFieldConfig) => {
            if(field.props){
              this.selectedLanguage$
              .pipe(mergeMap(lang => this.languageService.getEmailLabel(lang.id)))
              .subscribe(mapping => {
                field.props!.label = mapping.labelText
              });
            }
          }
        }
      },
      {
        id: 'rdoServiceEvaluation',
        name: 'radioServiceEvaluation',
        key: 'serviceEvaluation',
        type: 'radio',
        props: {
          label: 'How was your service?',
          required: true,
          options: [
            { value: 1, label: 'Poor'},
            { value: 2, label: 'Fair'},
            { value: 3, label: 'Good'},
            { value: 4, label: 'Very Good'},
            { value: 5, label: 'Excellent'}
          ]
        },
        hooks: {
          onInit: (field: FormlyFieldConfig) => {
            if(field.props){
              this.selectedLanguage$
              .pipe(
                mergeMap(lang =>
                  combineLatest( [this.languageService.getServiceEvaluationLabel(lang.id),
                                  this.languageService.getServiceEvaluationOptions(lang.id)]))
              ).subscribe( ([radioLabel, radioOptions]) => {
                field.props!.label = radioLabel.labelText;
                field.props!.options = radioOptions;
              });
            }
          }
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
