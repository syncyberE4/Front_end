import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Druivensoort} from '../models/druivensoort.model';

@Injectable({
  providedIn: 'root'
})
export class DruivensoortService {

  constructor(private http: HttpClient) { }

  getDruivenSoorten(): Observable<Druivensoort[]> {
    return this.http.get<Druivensoort[]>(environment.apiUrl + 'Druivensoort');
  }
  addDruivenSoorten(druivensoort: Druivensoort) {
    return this.http.post<Druivensoort>(environment.apiUrl + 'Druivensoort/create', druivensoort);
  }
  deleteDruivensoort(id: number) {
    return this.http.delete<Druivensoort>(environment.apiUrl + 'Druivensoort/delete/' + id);
  }
}
