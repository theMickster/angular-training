import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Language } from '../models/language';
import { LabelLanguageMapping } from '../models/labelLanguageMapping';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  private englishLanguageFallbackId = 'CBAD4BAE-5315-4DE8-8013-3DE9EEBA354A';

  private languageList : Language[] = [
    { id: 'CBAD4BAE-5315-4DE8-8013-3DE9EEBA354A', name: 'English', isoTwoDigitCode: 'en', isoThreeDigitCode: 'eng', direction: 'ltr' },
    { id: '0083469C-6885-48D4-A537-68CC3CAE9652', name: 'Spanish', isoTwoDigitCode: 'es', isoThreeDigitCode: 'spa', direction: 'ltr'  },
    { id: '68E3A8E0-3A20-4F52-8B7F-F0D381F64365', name: 'French', isoTwoDigitCode: 'fr', isoThreeDigitCode: 'fre', direction: 'ltr'  },
    { id: '61877FBD-F5AC-4FB4-8B29-3E837720D14F', name: 'Arabic', isoTwoDigitCode: 'ar', isoThreeDigitCode: 'ara', direction: 'rtl'  },
    { id: 'F0208F6C-7F06-4634-8ABE-671905048326', name: 'Portuguese', isoTwoDigitCode: 'pt', isoThreeDigitCode: 'por', direction: 'ltr'  },

    // { id: '48D60C7D-1741-4444-A9E6-DDBBDFAE1C34', name: 'Chinese', isoTwoDigitCode: 'zh', isoThreeDigitCode: 'zho', direction: 'ltr'  },
    // { id: '3AE0CE0E-3B6D-49FD-81E1-288061856E4D', name: 'Hebrew', isoTwoDigitCode: 'he', isoThreeDigitCode: 'heb', direction: 'rtl' },
    // { id: 'F1D90BF9-204E-4CED-A266-78C94ADE252E', name: 'Japanese', isoTwoDigitCode: 'ja', isoThreeDigitCode: 'jpn', direction: 'ltr'  },
    // { id: '1B5F0631-D749-4305-A811-AF90464C96A8', name: 'Korean', isoTwoDigitCode: 'ko', isoThreeDigitCode: 'kor', direction: 'ltr'  },
    // { id: '54006E16-FF5A-4181-B56A-52815EA8380F', name: 'Lao', isoTwoDigitCode: 'lo', isoThreeDigitCode: 'lao', direction: 'ltr'  },
    // { id: '88A58C77-EE98-4A74-B3CD-BC1F4EBB7DEA', name: 'Persian', isoTwoDigitCode: 'fa', isoThreeDigitCode: 'fas', direction: 'rtl' },
    // { id: '8755C452-EAF0-4A11-8BD0-1FE55C92F818', name: 'Somali', isoTwoDigitCode: 'so', isoThreeDigitCode: 'som', direction: 'ltr'  },
    // { id: '8BD7CF67-93B1-4564-B305-ECF990DFEBB0', name: 'Vietnamese', isoTwoDigitCode: 'vi', isoThreeDigitCode: 'vie', direction: 'ltr'  },
    // { id: 'CF1DE56C-BB08-4CBD-A730-D9DE3ECF9F55', name: 'Tagalog', isoTwoDigitCode: 'tl', isoThreeDigitCode: 'tgl', direction: 'ltr'  },
    // { id: '4A89D589-C8F1-4A91-974F-711944B20EA8', name: 'Luxembourgish', isoTwoDigitCode: 'lb', isoThreeDigitCode: 'ltz', direction: 'ltr'  },
    // { id: '060BA925-9B67-47C9-8C22-A1852C6F8ABC', name: 'Latin', isoTwoDigitCode: 'la', isoThreeDigitCode: 'lat', direction: 'ltr'  },
    // { id: '6459FDCE-0ADA-45A0-AF7C-08F1F24AFEF7', name: 'German', isoTwoDigitCode: 'de', isoThreeDigitCode: 'deu', direction: 'ltr'  },
    // { id: '9BBA9166-5576-49B5-8F48-3BDC95FCDCAF', name: 'Italian', isoTwoDigitCode: 'it', isoThreeDigitCode: 'ita', direction: 'ltr'  },
    // { id: 'A6C90E5C-C77F-464C-B593-F6F225414713', name: 'Polish', isoTwoDigitCode: 'pl', isoThreeDigitCode: 'pol', direction: 'ltr'  }
  ];

  private firstNameLabelMapping: LabelLanguageMapping[] = [
    { id: '69B7276D-505B-4F02-804B-FF6AA5258A9E', languageId: 'CBAD4BAE-5315-4DE8-8013-3DE9EEBA354A', labelText: 'First Name' },
    { id: '614E7D8D-D9B9-46E7-AFC1-008BB1E3AD15', languageId: '0083469C-6885-48D4-A537-68CC3CAE9652', labelText: 'Nombre de pila' },
    { id: '677E726B-A505-4DF7-A1CF-7F98E2DE50C2', languageId: '68E3A8E0-3A20-4F52-8B7F-F0D381F64365', labelText: 'Prénom' },
    { id: '2BA4A50E-027C-4E01-BEB1-95E4129EBE3B', languageId: '61877FBD-F5AC-4FB4-8B29-3E837720D14F', labelText: 'الاسم الأول'},
    { id: '6A1933FC-3041-493B-A862-CE9BAC4C3143', languageId: 'F0208F6C-7F06-4634-8ABE-671905048326', labelText: 'Primeiro nome' },
  ];

  private lastNameLabelMapping: LabelLanguageMapping[] = [
    { id: '8916840D-DFC5-4C38-80B5-ADC44CDD378A', languageId: 'CBAD4BAE-5315-4DE8-8013-3DE9EEBA354A', labelText: 'Last Name' },
    { id: '87BFEA79-160B-48AC-821C-B775076D558F', languageId: '0083469C-6885-48D4-A537-68CC3CAE9652', labelText: 'Nombre de familia' },
    { id: '5877EEE0-63D8-4BA1-A4B2-8E3D1CE33EF3', languageId: '68E3A8E0-3A20-4F52-8B7F-F0D381F64365', labelText: 'Nom de famille' },
    { id: 'F9478B20-3F21-4CD8-A8FF-A96D3F54B4CE', languageId: '61877FBD-F5AC-4FB4-8B29-3E837720D14F', labelText: 'اسم العائلة'},
    { id: 'E184B1A5-4850-4D46-A37F-D372206A2A99', languageId: 'F0208F6C-7F06-4634-8ABE-671905048326', labelText: 'Sobrenome' }
  ];

  private emailLabelMapping: LabelLanguageMapping[] = [
    { id: '0FB17963-DF5A-4F8E-A4F6-210B68EF6F5E', languageId: 'CBAD4BAE-5315-4DE8-8013-3DE9EEBA354A', labelText: 'Email Address' },
    { id: '4FAA9A05-D5AE-4515-A861-49DCD798E8BE', languageId: '0083469C-6885-48D4-A537-68CC3CAE9652', labelText: 'Dirección de correo electrónico' },
    { id: 'A50D24AF-C348-4EE4-9A70-20A4812207F6', languageId: '68E3A8E0-3A20-4F52-8B7F-F0D381F64365', labelText: 'Adresse e-mail' },
    { id: '384F4A6A-EF8F-473A-8DF5-14E7A7C19522', languageId: '61877FBD-F5AC-4FB4-8B29-3E837720D14F', labelText: 'عنوان البريد الإلكتروني'},
    { id: '5E743B9E-4746-4F07-9A5E-F0AB61B3CE5E', languageId: 'F0208F6C-7F06-4634-8ABE-671905048326', labelText: 'Endereço de email' },
  ];

  private serviceEvaluationLabelMapping: LabelLanguageMapping[] = [
    { id: '12C1D45C-D044-459F-84E0-EAEF0B62E108', languageId: 'CBAD4BAE-5315-4DE8-8013-3DE9EEBA354A', labelText: 'How was your service?' },
    { id: 'F5C48199-BFF0-4D4C-94E5-2A9CC4A6D140', languageId: '0083469C-6885-48D4-A537-68CC3CAE9652', labelText: '¿Cómo estuvo tu servicio?' },
    { id: '6D3DECB1-ED95-4721-83BF-8A05CE586B12', languageId: '68E3A8E0-3A20-4F52-8B7F-F0D381F64365', labelText: `Comment s'est passé votre service ?` },
    { id: '0CB22C9F-0BE2-4348-872E-8DF7A932FED7', languageId: '61877FBD-F5AC-4FB4-8B29-3E837720D14F', labelText: 'كيف كانت خدمتك؟'},
    { id: '7F278DDE-6804-45A1-A57F-040ECC401D1E', languageId: 'F0208F6C-7F06-4634-8ABE-671905048326', labelText: 'Como foi seu atendimento?' },

  ];

  getLanguages(): Observable<Language[]> {
    return of(this.languageList);
  }

  getFirstNameLabel(languageId: string): Observable<LabelLanguageMapping> {
    return of(this.firstNameLabelMapping.find(x => x.languageId === languageId) ??
              this.firstNameLabelMapping.find(x => x.languageId = this.englishLanguageFallbackId)! );
  }

  getLastNameLabel(languageId: string): Observable<LabelLanguageMapping> {
    return of(this.lastNameLabelMapping.find(x => x.languageId === languageId) ??
              this.lastNameLabelMapping.find(x => x.languageId = this.englishLanguageFallbackId)! );
  }

  getEmailLabel(languageId: string): Observable<LabelLanguageMapping> {
    return of(this.emailLabelMapping.find(x => x.languageId === languageId) ??
              this.emailLabelMapping.find(x => x.languageId = this.englishLanguageFallbackId)! );
  }

  getServiceEvaluationLabel(languageId: string): Observable<LabelLanguageMapping> {
    return of(this.serviceEvaluationLabelMapping.find(x => x.languageId === languageId) ??
              this.serviceEvaluationLabelMapping.find(x => x.languageId = this.englishLanguageFallbackId)! );
  }

  getServiceEvaluationOptions(languageId: string): Observable<any> {
    const optionLabels = [
      {
        id: '5C12870A-F7B4-45DC-8581-C04E35DA7310',
        languageId: 'CBAD4BAE-5315-4DE8-8013-3DE9EEBA354A',
        options: [
          { value: 1, label: 'Poor'},
          { value: 2, label: 'Fair'},
          { value: 3, label: 'Good'},
          { value: 4, label: 'Very Good'},
          { value: 5, label: 'Excellent'}
        ]
      },
      {
        id: '804D1DF5-1F6C-4213-966A-A32D6C0BBFED',
        languageId: '0083469C-6885-48D4-A537-68CC3CAE9652',
        options: [
          { value: 1, label: 'Pobre'},
          { value: 2, label: 'Justo'},
          { value: 3, label: 'Bueno'},
          { value: 4, label: 'Muy bueno'},
          { value: 5, label: 'Excelente'}
        ]
      },
      {
        id: '12C1D45C-D044-459F-84E0-EAEF0B62E108',
        languageId: '68E3A8E0-3A20-4F52-8B7F-F0D381F64365',
        options: [
          { value: 1, label: 'Pauvre'},
          { value: 2, label: 'Juste'},
          { value: 3, label: 'Bien'},
          { value: 4, label: 'Très bien'},
          { value: 5, label: 'Excellent'}
        ]
      },
      {
        id: '59F7AC77-435B-47BA-9577-725E9721A7A7',
        languageId: '61877FBD-F5AC-4FB4-8B29-3E837720D14F',
        options: [
          { value: 1, label: 'فقير'},
          { value: 2, label: 'عدل'},
          { value: 3, label: 'جيد'},
          { value: 4, label: 'جيد جدًا'},
          { value: 5, label: 'ممتاز'}
        ]
      },
      {
        id: '055D326F-390C-4F5E-BF2C-E6DB3924AC3E',
        languageId: 'F0208F6C-7F06-4634-8ABE-671905048326',
        options: [
          { value: 1, label: 'Pobre'},
          { value: 2, label: 'Justo'},
          { value: 3, label: 'Bom'},
          { value: 4, label: 'Muito bom'},
          { value: 5, label: 'Excelente'}
        ]
      }
    ]
    return of( optionLabels.find(x => x.languageId === languageId)?.options ??
                optionLabels.find(x => x.languageId == this.englishLanguageFallbackId)!.options );
  }
}
