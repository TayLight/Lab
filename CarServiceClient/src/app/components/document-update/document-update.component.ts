import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Document} from "../../models/document";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {DocumentService} from "../../service/document.service";
import {Account} from "../../models/account";
import {Operation} from "../../models/operation";
import {AccountService} from "../../service/account.service";
import {OperationService} from "../../service/operation.service";

@Component({
  selector: 'app-employee-update',
  templateUrl: './document-update.component.html',
  styleUrls: ['./document-update.component.css']
})
export class DocumentUpdateComponent implements OnInit {
  updateForm!:FormGroup;
  updateDocument!: Document;
  accounts!:Account[];
  operations!:Operation[];

  constructor(private documentService: DocumentService,
              private router: ActivatedRoute,
              private fb: FormBuilder,
              private location: Location,
              private accountService: AccountService,
              private operationService: OperationService,) { }

  ngOnInit(): void {
    this.documentService.getDocumentById(this.router.snapshot.params['id_updateDocument']).subscribe(data=> {
      this.updateDocument = data
    });
    this.accountService.getAllAccounts().subscribe(data =>{
      this.accounts = data;
    });
    this.operationService.getAllOperations().subscribe(data =>{
      this.operations = data;
    });
    this.updateForm = this.createUpdateForm();
  }

  createUpdateForm():FormGroup{
    return this.fb.group({
      name:['',Validators.compose([Validators.required])],
      salary:['',Validators.compose([Validators.required])],
      age:['',Validators.compose([Validators.required])],
    })
  }

  update(): void{
    this.documentService.updateDocument({
      id: this.updateDocument.id=this.router.snapshot.params['id_updateDocument'],
      operation:{
        id:this.updateForm.value.operation.id,
        name:this.updateForm.value.operation.name,
        restrictions:this.updateForm.value.operation.restrictions,
      },
      account: {
        id: this.updateForm.value.account.id,
        number: this.updateForm.value.account.number,
        contract: {
          id: this.updateForm.value.contract.id,
          number: this.updateForm.value.number,
          client: {
            id: this.updateForm.value.id,
            firstName:this.updateForm.value.first_name,
            lastName:this.updateForm.value.last_name,
            address:this.updateForm.value.address,
            passportSeries:this.updateForm.value.address,
            passportNumber:this.updateForm.value.address,
            phoneNumber:this.updateForm.value.address,
          }
        }
      },
    }).subscribe(data => {
      this.updateDocument = data;})
    window.location.reload();
    this.back();
  }
  back():void{
    this.location.back();
  }
}
