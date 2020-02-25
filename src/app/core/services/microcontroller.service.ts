import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Microcontroller} from '../models/microcontroller.model';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MicrocontrollerService {

  constructor(private http: HttpClient) { }

  getMicrocontrollers(): Observable<Microcontroller[]> {
    return this.http.get<Microcontroller[]>(environment.apiUrl + 'Micro');
  }
  addMicrocontroller(microcontroller: Microcontroller) {
    return this.http.post<Microcontroller>(environment.apiUrl + 'Micro/create', microcontroller);
  }
  deleteMicro(id: number) {
    return this.http.delete<Microcontroller>(environment.apiUrl + 'Micro/delete/' + id);
  }
}
