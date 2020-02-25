import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import { WebInstelling } from '../models/webinstelling.models';

@Injectable({
  providedIn: 'root'
})
export class WebinstellingService {

  constructor(private http: HttpClient) { }

  getWebinstelling(): Observable<WebInstelling[]> {
    return this.http.get<WebInstelling[]>(environment.apiUrl + 'WebInstelling');
  }

  // niet gebruikt
  updateWebinstelling(webinstellingen: WebInstelling[]) {
    return this.http.put<WebInstelling>(environment.apiUrl + 'WebInstelling', webinstellingen);
  }
}
