import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {Language} from '../models/language';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  getLanguages(): Observable<Language[]> {
    const list : Language[] = [
      { id: 'CBAD4BAE-5315-4DE8-8013-3DE9EEBA354A', name: 'English', isoTwoDigitCode: 'en', isoThreeDigitCode: 'eng' },
      { id: '0083469C-6885-48D4-A537-68CC3CAE9652', name: 'Spanish', isoTwoDigitCode: 'es', isoThreeDigitCode: 'spa' },
      { id: '68E3A8E0-3A20-4F52-8B7F-F0D381F64365', name: 'French', isoTwoDigitCode: 'fr', isoThreeDigitCode: 'fre' },
      { id: '61877FBD-F5AC-4FB4-8B29-3E837720D14F', name: 'Arabic', isoTwoDigitCode: 'ar', isoThreeDigitCode: 'ara' },
      { id: 'F0208F6C-7F06-4634-8ABE-671905048326', name: 'Portuguese', isoTwoDigitCode: 'pt', isoThreeDigitCode: 'por' },
      { id: '48D60C7D-1741-4444-A9E6-DDBBDFAE1C34', name: 'Chinese', isoTwoDigitCode: 'zh', isoThreeDigitCode: 'zho' },
      { id: '3AE0CE0E-3B6D-49FD-81E1-288061856E4D', name: 'Hebrew', isoTwoDigitCode: 'he', isoThreeDigitCode: 'heb' },
      { id: 'F1D90BF9-204E-4CED-A266-78C94ADE252E', name: 'Japanese', isoTwoDigitCode: 'ja', isoThreeDigitCode: 'jpn' },
      { id: '1B5F0631-D749-4305-A811-AF90464C96A8', name: 'Korean', isoTwoDigitCode: 'ko', isoThreeDigitCode: 'kor' },
      { id: '54006E16-FF5A-4181-B56A-52815EA8380F', name: 'Lao', isoTwoDigitCode: 'lo', isoThreeDigitCode: 'lao' },
      { id: '88A58C77-EE98-4A74-B3CD-BC1F4EBB7DEA', name: 'Persian', isoTwoDigitCode: 'fa', isoThreeDigitCode: 'fas' },
      { id: '8755C452-EAF0-4A11-8BD0-1FE55C92F818', name: 'Somali', isoTwoDigitCode: 'so', isoThreeDigitCode: 'som' },
      { id: '8BD7CF67-93B1-4564-B305-ECF990DFEBB0', name: 'Vietnamese', isoTwoDigitCode: 'vi', isoThreeDigitCode: 'vie' },
      { id: 'CF1DE56C-BB08-4CBD-A730-D9DE3ECF9F55', name: 'Tagalog', isoTwoDigitCode: 'tl', isoThreeDigitCode: 'tgl' },
      { id: '4A89D589-C8F1-4A91-974F-711944B20EA8', name: 'Luxembourgish', isoTwoDigitCode: 'lb', isoThreeDigitCode: 'ltz' },
      { id: '060BA925-9B67-47C9-8C22-A1852C6F8ABC', name: 'Latin', isoTwoDigitCode: 'la', isoThreeDigitCode: 'lat' },
      { id: '6459FDCE-0ADA-45A0-AF7C-08F1F24AFEF7', name: 'German', isoTwoDigitCode: 'de', isoThreeDigitCode: 'deu' },
      { id: '9BBA9166-5576-49B5-8F48-3BDC95FCDCAF', name: 'Italian', isoTwoDigitCode: 'it', isoThreeDigitCode: 'ita' },
      { id: 'A6C90E5C-C77F-464C-B593-F6F225414713', name: 'Polish', isoTwoDigitCode: 'pl', isoThreeDigitCode: 'pol' }
    ];

    return of(list);

  }

}
