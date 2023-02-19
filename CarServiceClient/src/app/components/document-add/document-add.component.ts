import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Document} from "../../models/document";
import {DocumentService} from "../../service/document.service";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";

@Component({
  selector: 'app-employee-add',
  templateUrl: './document-add.component.html',
  styleUrls: ['./document-add.component.css']
})
export class DocumentAddComponent implements OnInit {
  addForm!:FormGroup;
  addDocument!: Document;

  constructor(private documentService: DocumentService,
              private router: ActivatedRoute,
              private fb: FormBuilder,
              private location: Location,) { }

  ngOnInit(): void {
    this.addForm = this.createAddForm();
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
      name:this.addForm.value.name,
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
          client: {
            id: this.addForm.value.id,
            first_name:this.addForm.value.first_name,
            last_name:this.addForm.value.last_name,
            address:this.addForm.value.address,
            passport_series:this.addForm.value.address,
            passport_number:this.addForm.value.address,
            phone_number:this.addForm.value.address,
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
