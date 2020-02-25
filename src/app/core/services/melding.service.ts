import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import { Melding } from '../models/melding.model';

@Injectable({
  providedIn: 'root'
})
export class MeldingService {

  constructor(private http: HttpClient) {
  }

  getMeldingen(): Observable<Melding[]> {
    return this.http.get<Melding[]>(environment.apiUrl + 'Melding');
  }

  bevestigMelding(melding : Melding) {
    return this.http.put(environment.apiUrl + 'Melding/bevestigMelding', melding);
  }

  getMeldingInstellingen(){
    return this.http.get<any>(environment.apiUrl + 'Melding/instellen');
  }

  stelMeldingIn(webUrl:string, sendGridAPIKey:string, twilioAPIKey:string){
    return this.http.put(environment.apiUrl + 'Melding/instellen', {webUrl, sendGridAPIKey, twilioAPIKey});
  }
}
