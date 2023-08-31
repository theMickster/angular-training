import { Component } from '@angular/core';
import { faCompass, faComments, faHouse } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  fontAwesomeCompass = faCompass;
  fontAwesomeComments = faComments;
  fontAwesomeHouse = faHouse;

}
