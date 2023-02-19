import { Component, OnInit } from '@angular/core';
import {Account} from "../../models/account";
import {AccountService} from "../../service/account.service";

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {

  accounts!:Account[];
  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.accountService.getAllAccounts().subscribe(data=>{
      this.accounts = data;
    });
  }
  removeOrganization(account: Account):void{
    const message = confirm('Вы действительно хотите удалить данный аккаунт?')
    if(message){
      this.accountService.deleteAccount(account.id).subscribe(()=>{
        this.accounts.splice(<number>account.id,1);
      });
      window.location.reload();
    }
  }
}
