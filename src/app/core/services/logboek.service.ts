import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Logboek} from '../models/logboek.model';

@Injectable({
  providedIn: 'root'
})
export class LogboekService {

  constructor(private http: HttpClient) { }

  addLogboek(logboek: Logboek) {
    return this.http.post<Logboek>(environment.apiUrl + 'logboek/create', logboek);
  }
}
