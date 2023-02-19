import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {AccountService} from "../../service/account.service";
import {Account} from "../../models/account";

@Component({
  selector: 'app-account-add',
  templateUrl: './account-add.component.html',
  styleUrls: ['./account-add.component.css']
})
export class AccountAddComponent implements OnInit {
  addForm!:FormGroup;
  addOrganization!: Account;

  constructor(private accountService: AccountService,
              private router: ActivatedRoute,
              private fb: FormBuilder,
              private location: Location,) { }

  ngOnInit(): void {
    this.addForm = this.createAddForm();
  }

  createAddForm():FormGroup{
    return this.fb.group({
      name:['',Validators.compose([Validators.required])],
      address:['',Validators.compose([Validators.required])],
    })
  }

  createOrganization():void{
    this.accountService.createAccount({
      number:this.addForm.value.number,
      contract: this.addForm.value.contract
    }).subscribe(data=>{
      this.addOrganization=data;
    })
    window.location.reload();
    this.location.back();
  }
}
