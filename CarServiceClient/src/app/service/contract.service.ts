import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Contract} from "../models/contract";

const CONTRACT_API = 'http://localhost:8080/contract/';

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  constructor(private http: HttpClient) { }

  getAllContract() : Observable<any>{
    return this.http.get(CONTRACT_API+'all');
  }

  createContract(contract: Contract) : Observable<any>{
    return this.http.post(CONTRACT_API+'add',contract);
  }

  updateContract(contract: Contract) : Observable<any>{
    return this.http.post(CONTRACT_API+'update',contract);
  }

  getContractById(id:number) : Observable<any>{
    return this.http.get(CONTRACT_API+id);
  }

  deleteContract(id: number | undefined):Observable<any>{
    return this.http.post(CONTRACT_API+'delete/'+id,null);
  }
}
