import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Document} from "../../models/document";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {DocumentService} from "../../service/document.service";

@Component({
  selector: 'app-employee-update',
  templateUrl: './document-update.component.html',
  styleUrls: ['./document-update.component.css']
})
export class DocumentUpdateComponent implements OnInit {
  updateForm!:FormGroup;
  updateDocument!: Document;

  constructor(private documentService: DocumentService,
              private router: ActivatedRoute,
              private fb: FormBuilder,
              private location: Location,) { }

  ngOnInit(): void {
    this.documentService.getDocumentById(this.router.snapshot.params['id_updateDocument']).subscribe(data=> {
      this.updateDocument = data
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
      name:this.updateForm.value.name,
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
          client: {
            id: this.updateForm.value.id,
            first_name:this.updateForm.value.first_name,
            last_name:this.updateForm.value.last_name,
            address:this.updateForm.value.address,
            passport_series:this.updateForm.value.address,
            passport_number:this.updateForm.value.address,
            phone_number:this.updateForm.value.address,
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
