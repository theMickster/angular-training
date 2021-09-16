import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanLoad, CanActivate, Route, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

constructor(
    private authService: AuthService,
    private router: Router) {
  
}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.checkedLoggedIn( state.url );
  }

  canLoad(route: Route): boolean {
    return this.checkedLoggedIn(route.path);
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
