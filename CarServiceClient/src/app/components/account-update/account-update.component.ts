import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {Account} from "../../models/account";
import {AccountService} from "../../service/account.service";

@Component({
  selector: 'app-organization-update',
  templateUrl: './account-update.component.html',
  styleUrls: ['./account-update.component.css']
})
export class AccountUpdateComponent implements OnInit {
  updateForm!:FormGroup;
  updateAccount!: Account;

  constructor(private organizationService: AccountService,
              private router: ActivatedRoute,
              private fb: FormBuilder,
              private location: Location,) { }

  ngOnInit(): void {
    this.organizationService.getAccountById(this.router.snapshot.params['id_updateAccount']).subscribe(data=> {
      this.updateAccount = data
    });
    this.updateForm = this.createUpdateForm();
  }

  createUpdateForm():FormGroup{
    return this.fb.group({
      name:['',Validators.compose([Validators.required])],
      address:['',Validators.compose([Validators.required])],
    })
  }

  update(): void{
    this.organizationService.updateAccount({
      id: this.updateAccount.id=this.router.snapshot.params['id_updateAccount'],
      number:this.updateForm.value.number,
      contract: this.updateForm.value.contract
    }).subscribe(data => {
      this.updateAccount = data;})
    window.location.reload();
    this.back();
  }
  back():void{
    this.location.back();
  }
}
