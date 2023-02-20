import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Client} from "../models/car";

const CLIENT_API = 'http://localhost:8080/api/client/';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) {
  }

  getAllClients(): Observable<any> {
    return this.http.get(CLIENT_API);
  }

  createClient(car: Client): Observable<any> {
    return this.http.post(CLIENT_API, car);
  }

  updateClient(car: Client): Observable<any> {
    return this.http.post(CLIENT_API, car);
  }

  getClientById(id: number): Observable<any> {
    return this.http.get(CLIENT_API + id);
  }

  deleteClient(id: number | undefined): Observable<any> {
    return this.http.post(CLIENT_API + id, null);
  }
}
