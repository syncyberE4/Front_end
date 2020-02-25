import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthenticateService} from '../authenticate.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _authenticateService: AuthenticateService, private router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const url: string = state.url;
      return this.checkLogin(url);
  }
  
  // slimme login check, oorspronkelijk webadres word bijgehouden
  checkLogin(url: string) {
    if (this._authenticateService.isLoggedIn()) {
      return true;
    }

    console.log('*/*/*/*/*/*/*/ unauthorized */*/*/*/*/*/*/');
    this._authenticateService.redirectUrl = url;
    this.router.navigate(['/login-page'], {queryParams: { returnUrl: url }} );
  }
}
