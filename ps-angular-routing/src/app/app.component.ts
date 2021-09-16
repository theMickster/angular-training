import { Component } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError, NavigationCancel } from '@angular/router';
import { AuthService } from './user/auth.service';
import { MessageService } from './messages/message.service';
import { slideInAnimation} from './app.animation';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [slideInAnimation]
})
export class AppComponent {
  pageTitle = 'Contoso';

  isPageLoading : boolean = true;

  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }

  get isMessageDisplayed(): boolean {
    return this.messageService.isDisplayed;
  }

  get userName(): string {
    if (this.authService.currentUser) {
      return this.authService.currentUser.userName;
    }
    return '';
  }

  constructor(
    private authService: AuthService,
    private router: Router,
    private messageService: MessageService) {
      router.events.subscribe(
        (routerEvent: Event) => {
          this.checkRouterEvent(routerEvent);
        }

      );

    }

  checkRouterEvent(routerEvent: Event) {
    if(routerEvent instanceof NavigationStart){
      this.isPageLoading = true;
    }
    else if (
        routerEvent instanceof NavigationEnd ||
        routerEvent instanceof NavigationCancel ||
        routerEvent instanceof NavigationError
    )
    {
      this.isPageLoading = false;
    }
  }

  logOut(): void {
    console.log(`The user ${this.authService.currentUser.userName} is being logged out`);
    this.authService.logout();
    this.router.navigate(['/welcome']);

  }

  showMessages(): void{
    this.router.navigate( [ {outlets: {'messages-outlet' : 'messages' } } ]);
    this.messageService.isDisplayed = true;
  }

  hideMessages(): void{
    this.router.navigate( [ {outlets: {'messages-outlet' : null} } ]);
    this.messageService.isDisplayed = false;
  }
}
