import { Injectable } from '@angular/core';
import {Gebruiker} from '../models/gebruiker.model';
import {environment} from '../../../environments/environment';
import {Alarm} from '../models/alarm.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlarmService {

  constructor(private http: HttpClient) { }

  addAlarm(alarm: Alarm) {
    return this.http.post<Gebruiker>(environment.apiUrl + 'Alarm/create', alarm);
  }
}
