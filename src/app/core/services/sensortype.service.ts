import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {Sensortype} from '../models/sensortype.model';

@Injectable({
  providedIn: 'root'
})
export class SensortypeService {

  constructor(private http: HttpClient) { }

  getSensorTypes(): Observable<Sensortype[]> {
    return this.http.get<Sensortype[]>(environment.apiUrl + 'Sensortype');
  }
}
