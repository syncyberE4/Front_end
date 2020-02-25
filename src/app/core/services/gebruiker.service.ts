import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Gebruiker} from '../models/gebruiker.model';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GebruikerService {

  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<Gebruiker[]> {
    return this.http.get<Gebruiker[]>(environment.apiUrl + 'Gebruiker');
  }

  getRollen(): Observable<string[]> {
    return this.http.get<string[]>(environment.apiUrl + 'Gebruiker/rollen');
  }

  getUser(gebruikerId: number): Observable<Gebruiker> {
    return this.http.get<Gebruiker>(environment.apiUrl);
  }

  addUser(gebruiker: Gebruiker) {
    return this.http.post<Gebruiker>(environment.apiUrl + 'Gebruiker/create', gebruiker);
  }

  updateUser(gebruikerId: number, gebruiker: Gebruiker) {
    return this.http.put<Gebruiker>(environment.apiUrl, gebruiker);
  }

  deleteUser(gebruikerId: number) {
    return this.http.delete<Gebruiker>(environment.apiUrl + 'Gebruiker/delete/' + gebruikerId);
  }

  archiveUser(gebruiker: Gebruiker) {
    return this.http.put<Gebruiker>(environment.apiUrl+ 'Gebruiker/archiveer/', gebruiker);
  }
}
