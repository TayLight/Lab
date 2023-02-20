import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Operation} from "../models/operation";


const OPERATION_API = 'http://localhost:8080/api/operation/';

@Injectable({
  providedIn: 'root'
})
export class OperationService {

  constructor(private http: HttpClient) {
  }

  getAllOperations(): Observable<any> {
    return this.http.get(OPERATION_API);
  }

  createOperation(operation: Operation): Observable<any> {
    return this.http.post(OPERATION_API, operation);
  }

  updateOperation(operation: Operation): Observable<any> {
    return this.http.post(OPERATION_API, operation);
  }

  getOperationById(id: number): Observable<any> {
    return this.http.get(OPERATION_API + id);
  }

  deleteOperation(id: number | undefined): Observable<any> {
    return this.http.post(OPERATION_API + id, null);
  }
}
