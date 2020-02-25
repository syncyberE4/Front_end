import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Persprogramma} from '../models/persprogramma.model';

@Injectable({
  providedIn: 'root'
})
export class PersprogrammaService {

  constructor(private http: HttpClient) { }

  getPersProgrammas(): Observable<Persprogramma[]> {
    return this.http.get<Persprogramma[]>(environment.apiUrl + 'PersProgramma');
  }
  addPersProgrammas(persprogramma: Persprogramma) {
    return this.http.post<Persprogramma>(environment.apiUrl + 'PersProgramma/create', persprogramma);
  }
  deletePersprogramma(id: number) {
    return this.http.delete<Persprogramma>(environment.apiUrl + 'PersProgramma/delete/' + id);
  }
}
