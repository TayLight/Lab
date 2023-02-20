import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Contract} from "../models/contract";

const CONTRACT_API = 'http://localhost:8080/api/contract/';

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  constructor(private http: HttpClient) {
  }

  getAllContract(): Observable<any> {
    return this.http.get(CONTRACT_API);
  }

  createContract(contract: Contract): Observable<any> {
    return this.http.post(CONTRACT_API, contract);
  }

  updateContract(contract: Contract): Observable<any> {
    return this.http.post(CONTRACT_API, contract);
  }

  getContractById(id: number): Observable<any> {
    return this.http.get(CONTRACT_API + id);
  }

  deleteContract(id: number | undefined): Observable<any> {
    return this.http.post(CONTRACT_API + id, null);
  }
}
