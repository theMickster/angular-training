import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {
  map,
  filter,
  shareReplay,
  share,
  startWith,
  take,
} from 'rxjs/operators';
import {
  logBlue,
  logMagenta,
  logRed,
  logYellow,
  logNothing,
  logGreen,
  logOrange,
  logCyan,
} from '../logs';

@Component({
  selector: 'reactive-training',
  templateUrl: './reactive-training.component.html',
  styleUrls: ['./reactive-training.component.css'],
})
export class ReactiveTrainingComponent implements OnInit {
  pageTitle = 'Day #1';

  constructor() {}

  ngOnInit() {}

  public btn01Click() {
    //logYellow('btn01 has been clicked');
    this.exercise01();
  }

  public btn02Click() {
    //logYellow('btn02 has been clicked');
    this.exercise02();
  }

  public btn03Click() {
    //logYellow('btn03 has been clicked');
    this.exercise03();
  }

  public btn04Click() {
    //logYellow('btn04 has been clicked');
    this.exercise04();
  }

  public btn05Click() {
    //logYellow('btn05 has been clicked');
    this.exercise05();
  }

  public btn06Click() {
    //logYellow('btn04 has been clicked');
    this.exercise06();
  }

  public btn07Click() {
    //logYellow('btn04 has been clicked');
    this.exercise07();
  }

  public btn08Click() {
    //logYellow('btn04 has been clicked');
    this.exercise07();
  }

  private exercise01() {
    // Look at the similarities of the two constructors
    const myFirstPromise = new Promise((resolve, reject) => {
      logRed('Creating a first, basic promise.');
      logNothing();
      resolve('This is a first, basic promise.... Remember, I am async!');
    });

    myFirstPromise.then((response) => {
      logRed(`My Promise responded with: ${response}`);
    });

    const myFirstObservable = new Observable((observer) => {
      logBlue('Creating a first observable.');
      logNothing();
      observer.next('Message number 1');
      observer.next('Message number 2');
      observer.next('Message number 3');
      observer.complete();
    });

    const mySubscription = myFirstObservable.subscribe(
      (x) => {
        // success
        logBlue(`Observable:Next: ${x}`);
      },
      (error) => {
        // error
        logRed(`Observable:Error: ${error}`);
      },
      () => {
        logMagenta('observer complete fired.');
      }
    );
  }

  private exercise02() {
    let x: number = 0;
    const mySecondObservable = new Observable((y) => {
      setInterval(() => {
        x++;
        if (x > 3) {
          y.error('Four executions is enough...');
          //y.complete();
        }
        y.next(`Iteration #${x}`);
      }, 1500);
    });

    const mySubscription02 = mySecondObservable.subscribe(
      (x) => {
        logBlue(`Observable:Next: ${x}`);
      },
      (e) => {
        logRed(`Observable:Error: ${e}`);
      },
      () => {
        logMagenta('Observable completed');
      }
    );
  }

  private exercise03() {
    const tacos = new Observable((observer) => {
      logYellow('Initalizing tacos observable...');
      observer.next('Who wants tacos?');

      setTimeout(() => {
        observer.next('Taco serving #1.');
      }, 1000);

      setTimeout(() => {
        observer.next('Taco serving #2.');
      }, 1500);

      setTimeout(() => {
        observer.next('Taco serving #3.');
      }, 2500);

      setTimeout(() => {
        observer.next('Taco serving #4.');
      }, 3500);
    }).pipe(share());

    const mickSub = tacos.subscribe(logBlue);
    const traceySub = tacos.subscribe(logGreen);

    setTimeout(() => {
      const noraSub = tacos.subscribe(logMagenta);
    }, 2000);

    setTimeout(() => {
      const myaSub = tacos.subscribe(logOrange);
    }, 3200);
  }

  private exercise04() {
    const tacos = new Observable((observer) => {
      logYellow('Initalizing tacos observable...');
      observer.next('Who wants tacos?');

      setTimeout(() => {
        observer.next('Taco serving #1.');
      }, 1000);

      setTimeout(() => {
        observer.next('Taco serving #2.');
      }, 1500);

      setTimeout(() => {
        observer.next('Taco serving #3.');
      }, 2500);

      setTimeout(() => {
        observer.next('Taco serving #4.');
      }, 3500);
    }).pipe(shareReplay());

    const mickSub = tacos.subscribe(logBlue);
    const traceySub = tacos.subscribe(logGreen);

    setTimeout(() => {
      const noraSub = tacos.subscribe(logMagenta);
    }, 2000);

    setTimeout(() => {
      const myaSub = tacos.subscribe(logOrange);
    }, 3200);
  }

  /* Example on Chaining */
  private exercise05() {
    const getRandomNumber = () => Math.round(Math.random() * 100);

    const obs005 = new Observable<number>((observer) => {
      logYellow('Initalizing random number observable...');
      setInterval(() => observer.next(getRandomNumber()), 500);
    }).pipe(
      //startWith(7),
      filter((randValue) => randValue < 50),
      map((yy) => yy + 1),
      // filter((val : number) => val > 5),
      // map((xx) => Math.sqrt(xx)),
      take(7)
    );

    //myObservable.subscribe(logRed);

    obs005.subscribe({
      next: (v) => logMagenta(v),
      error: (e) => logRed(e),
      complete: () => logCyan('complete'),
    });
  }

  private exercise06() {}

  private exercise07() {}

  private exercise08() {}
}
