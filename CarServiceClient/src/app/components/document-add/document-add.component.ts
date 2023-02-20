import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Document} from "../../models/document";
import {DocumentService} from "../../service/document.service";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {Account} from "../../models/account";
import {AccountService} from "../../service/account.service";
import {OperationService} from "../../service/operation.service";
import {Operation} from "../../models/operation";

@Component({
  selector: 'app-employee-add',
  templateUrl: './document-add.component.html',
  styleUrls: ['./document-add.component.css']
})
export class DocumentAddComponent implements OnInit {
  addForm!:FormGroup;
  addDocument!: Document;
  accounts!:Account[];
  operations!:Operation[];

  constructor(private documentService: DocumentService,
              private router: ActivatedRoute,
              private fb: FormBuilder,
              private location: Location,
              private accountService: AccountService,
              private operationService: OperationService,) { }

  ngOnInit(): void {
    this.addForm = this.createAddForm();
    this.accountService.getAllAccounts().subscribe(data =>{
      this.accounts = data;
    });
    this.operationService.getAllOperations().subscribe(data =>{
      this.operations = data;
    });
  }

  createAddForm():FormGroup{
    return this.fb.group({
      name:['',Validators.compose([Validators.required])],
      salary:['',Validators.compose([Validators.required])],
      age:['',Validators.compose([Validators.required])],
    })
  }

  createEmployee(): void{
    this.documentService.createDocument({
      operation: {
        id: this.addForm.value.id,
        name: this.addForm.value.name,
        restrictions: this.addForm.value.restrictions,
      },
      account: {
        id: this.addForm.value.id,
        number: this.addForm.value.number,
        contract: {
          id: this.addForm.value.contract.id,
          number: this.addForm.value.number,
          client: {
            id: this.addForm.value.id,
            firstName:this.addForm.value.first_name,
            lastName:this.addForm.value.last_name,
            address:this.addForm.value.address,
            passportSeries:this.addForm.value.address,
            passportNumber:this.addForm.value.address,
            phoneNumber:this.addForm.value.address,
          }
        }
      },
    }).subscribe(data => {
      this.addDocument = data;})
    window.location.reload();
    this.back();
  }
  back():void{
    this.location.back();
  }
}
