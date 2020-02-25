import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Gebruiker} from '../models/gebruiker.model';
import {BehaviorSubject, Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {GebruikerLogin} from '../models/gebruikerlogin.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  redirectUrl: string;
  isLoggedin = new BehaviorSubject(false);
  constructor(private httpClient: HttpClient) {
  }

  authenticate(gebruikerLogin: GebruikerLogin): Observable<Gebruiker> {
    console.log(gebruikerLogin);
    return this.httpClient.post<Gebruiker>(environment.apiUrl + 'Gebruiker/authenticate', gebruikerLogin);
  }

  isLoggedIn() {
    if (localStorage.getItem('gebruiker')) {
      return true;
    } else {
      return false;
    }
  }

  // gebruiker uitloggen
  logout() {
    localStorage.removeItem('gebruiker');
  }
}
