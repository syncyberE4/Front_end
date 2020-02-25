import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Gebruiker } from '../models/gebruiker.model';
@Injectable()
export class SecurityInterceptor implements HttpInterceptor {
  constructor(private _router: Router) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(JSON.parse(localStorage.getItem("gebruiker")) as Gebruiker)
      var token = (JSON.parse(localStorage.getItem("gebruiker")) as Gebruiker).token;
    
    if (token) {
        request = request.clone({
            setHeaders: {
                Authorization: 'Bearer ' + token
            }
        });
    }
    return next.handle(request).pipe(
      catchError(err => {
        if (err.status === 401) {
          this._router.navigate(['login-page']);
          return throwError('unauthorized');
        }
        if (err.status === 0) {
            return throwError('Oops. Server staat niet aan');
        }
        return throwError(err.error.message);
      }));
  }
}
