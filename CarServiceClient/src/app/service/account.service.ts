import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Account} from "../models/account";
const ACCOUNT_API = 'http://localhost:8080/account/';
@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  getAllAccounts() : Observable<any>{
    return this.http.get(ACCOUNT_API);
  }

  createAccount(account :Account) : Observable<any>{
    return this.http.post(ACCOUNT_API,account);
  }

  updateAccount(account: Account) : Observable<any>{
    return this.http.post(ACCOUNT_API,account);
  }

  getAccountById(id:number) : Observable<any>{
    return this.http.get(ACCOUNT_API+id);
  }

  deleteAccount(id: number | undefined):Observable<any>{
    return this.http.delete(ACCOUNT_API+id);
  }
}
