import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

constructor(
    private authService: AuthService,
    private router: Router) {
  
}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.checkedLoggedIn( state.url );
  }
  
  checkedLoggedIn(fromUrl: string) : boolean {
    if( this.authService.isLoggedIn ){
      this.authService.redirectUrl = null;

      return true;
    }
    this.authService.redirectUrl = fromUrl;
    this.router.navigate(['/login']);
    return false;
  }
}
