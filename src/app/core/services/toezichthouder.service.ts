import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {Toezichthouder} from '../models/toezichthouder.model';


@Injectable({
  providedIn: 'root'
})
export class ToezichthouderService {

  constructor(private http: HttpClient) {
  }

  getToezichthouders(): Observable<Toezichthouder[]> {
    return this.http.get<Toezichthouder[]>(environment.apiUrl + 'Toezichthouder');
  }

  getToezichthoudersBetweenNowDate(): Observable<Toezichthouder[]> {
    return this.http.get<Toezichthouder[]>(environment.apiUrl + 'Toezichthouder/GetAllBetweenNowDate');
  }

  addToezichthouder(toezichthouder: Toezichthouder) {
    return this.http.post<number>(environment.apiUrl + 'Toezichthouder/create', toezichthouder);
  }

  // niet gebruikt
  updateToezichthouder(toezichthouder: Toezichthouder) {
    return this.http.put<Toezichthouder>(environment.apiUrl + 'Toezichthouder/update', toezichthouder);
  }

  deleteToezichthouder(toezichthouderId: number) {
    return this.http.delete<Toezichthouder>(environment.apiUrl + 'Toezichthouder/delete/' + toezichthouderId);
  }
}
