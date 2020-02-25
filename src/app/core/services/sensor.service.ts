import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {Sensor} from '../models/sensor.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SensorService {

  constructor(private http: HttpClient) { }

  getSensoren(): Observable<Sensor[]> {
    return this.http.get<Sensor[]>(environment.apiUrl + 'Sensor');
  }
  getSensorWithTypeByVatId(vatId: number): Observable<Sensor[]> {
    return this.http.get<Sensor[]>(environment.apiUrl + 'Sensor/byVatId/' + vatId);
  }
  updateSensorBeschikbaar(sensor: Sensor[]) {
    return this.http.post<Sensor[]>(environment.apiUrl + 'Sensor/multipleStatusUpdate', sensor);
  }

  addSensor(sensor: Sensor) {
    return this.http.post<Sensor>(environment.apiUrl + 'Sensor/create', sensor);
  }

  deleteSensor(id: number) {
    return this.http.delete<Sensor>(environment.apiUrl + 'Sensor/delete/' + id);
  }
}
