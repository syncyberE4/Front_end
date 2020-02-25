import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {Vat} from '../models/vat.model';
import {Raspipoort} from '../models/raspipoort.model';

@Injectable({
  providedIn: 'root'
})
export class VatService {

  constructor(private http: HttpClient) { }

  getVaten(): Observable<Vat[]> {
    return this.http.get<Vat[]>(environment.apiUrl + 'Vat');
  }
  getVatenWithMicroAndPoort(): Observable<Vat[]> {
    return this.http.get<Vat[]>(environment.apiUrl + 'Vat/GetAllVatenWithMicroAndPoort');
  }
  addVat(vat: Vat) {
    console.log(vat);
    return this.http.post<Vat>(environment.apiUrl + 'Vat/create', vat);
  }
  deleteVat(id: number) {
    return this.http.delete<Vat>(environment.apiUrl + 'Vat/delete/' + id);
  }

  // uitzondering: raspi_poorten get.
  getRaspipoorten(): Observable<Raspipoort[]> {
    return this.http.get<Raspipoort[]>(environment.apiUrl + 'RaspiPoort');
  }
}
