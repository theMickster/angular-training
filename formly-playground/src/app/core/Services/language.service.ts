import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Language } from '../models/language';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  getLanguages(): Observable<Language[]> {
    const list : Language[] = [
      { id: 'CBAD4BAE-5315-4DE8-8013-3DE9EEBA354A', name: 'English', isoTwoDigitCode: 'en', isoThreeDigitCode: 'eng', direction: 'ltr' },
      { id: '0083469C-6885-48D4-A537-68CC3CAE9652', name: 'Spanish', isoTwoDigitCode: 'es', isoThreeDigitCode: 'spa', direction: 'ltr'  },
      { id: '68E3A8E0-3A20-4F52-8B7F-F0D381F64365', name: 'French', isoTwoDigitCode: 'fr', isoThreeDigitCode: 'fre', direction: 'ltr'  },
      { id: '61877FBD-F5AC-4FB4-8B29-3E837720D14F', name: 'Arabic', isoTwoDigitCode: 'ar', isoThreeDigitCode: 'ara', direction: 'rtl'  },
      { id: 'F0208F6C-7F06-4634-8ABE-671905048326', name: 'Portuguese', isoTwoDigitCode: 'pt', isoThreeDigitCode: 'por', direction: 'ltr'  },
      { id: '48D60C7D-1741-4444-A9E6-DDBBDFAE1C34', name: 'Chinese', isoTwoDigitCode: 'zh', isoThreeDigitCode: 'zho', direction: 'ltr'  },
      { id: '3AE0CE0E-3B6D-49FD-81E1-288061856E4D', name: 'Hebrew', isoTwoDigitCode: 'he', isoThreeDigitCode: 'heb', direction: 'rtl' },
      { id: 'F1D90BF9-204E-4CED-A266-78C94ADE252E', name: 'Japanese', isoTwoDigitCode: 'ja', isoThreeDigitCode: 'jpn', direction: 'ltr'  },
      { id: '1B5F0631-D749-4305-A811-AF90464C96A8', name: 'Korean', isoTwoDigitCode: 'ko', isoThreeDigitCode: 'kor', direction: 'ltr'  },
      { id: '54006E16-FF5A-4181-B56A-52815EA8380F', name: 'Lao', isoTwoDigitCode: 'lo', isoThreeDigitCode: 'lao', direction: 'ltr'  },
      { id: '88A58C77-EE98-4A74-B3CD-BC1F4EBB7DEA', name: 'Persian', isoTwoDigitCode: 'fa', isoThreeDigitCode: 'fas', direction: 'rtl' },
      { id: '8755C452-EAF0-4A11-8BD0-1FE55C92F818', name: 'Somali', isoTwoDigitCode: 'so', isoThreeDigitCode: 'som', direction: 'ltr'  },
      { id: '8BD7CF67-93B1-4564-B305-ECF990DFEBB0', name: 'Vietnamese', isoTwoDigitCode: 'vi', isoThreeDigitCode: 'vie', direction: 'ltr'  },
      { id: 'CF1DE56C-BB08-4CBD-A730-D9DE3ECF9F55', name: 'Tagalog', isoTwoDigitCode: 'tl', isoThreeDigitCode: 'tgl', direction: 'ltr'  },
      { id: '4A89D589-C8F1-4A91-974F-711944B20EA8', name: 'Luxembourgish', isoTwoDigitCode: 'lb', isoThreeDigitCode: 'ltz', direction: 'ltr'  },
      { id: '060BA925-9B67-47C9-8C22-A1852C6F8ABC', name: 'Latin', isoTwoDigitCode: 'la', isoThreeDigitCode: 'lat', direction: 'ltr'  },
      { id: '6459FDCE-0ADA-45A0-AF7C-08F1F24AFEF7', name: 'German', isoTwoDigitCode: 'de', isoThreeDigitCode: 'deu', direction: 'ltr'  },
      { id: '9BBA9166-5576-49B5-8F48-3BDC95FCDCAF', name: 'Italian', isoTwoDigitCode: 'it', isoThreeDigitCode: 'ita', direction: 'ltr'  },
      { id: 'A6C90E5C-C77F-464C-B593-F6F225414713', name: 'Polish', isoTwoDigitCode: 'pl', isoThreeDigitCode: 'pol', direction: 'ltr'  }
    ];

    return of(list);

  }

}
