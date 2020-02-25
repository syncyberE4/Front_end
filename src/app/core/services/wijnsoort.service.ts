import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Wijnsoort} from '../models/wijnsoort.model';

@Injectable({
  providedIn: 'root'
})
export class WijnsoortService {

  constructor(private http: HttpClient) { }

  getWijnsoorten(): Observable<Wijnsoort[]> {
    return this.http.get<Wijnsoort[]>(environment.apiUrl + 'Wijnsoort');
  }
  addDruivenSoorten(wijnsoort: Wijnsoort) {
    return this.http.post<Wijnsoort>(environment.apiUrl + 'Wijnsoort/create', wijnsoort);
  }
  deleteDruivensoort(id: number) {
    return this.http.delete<Wijnsoort>(environment.apiUrl + 'Wijnsoort/delete/' + id);
  }
}
