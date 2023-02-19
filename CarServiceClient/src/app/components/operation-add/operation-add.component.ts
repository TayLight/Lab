import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Operation} from "../../models/operation";
import {OperationService} from "../../service/operation.service";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";

@Component({
  selector: 'app-mark-add',
  templateUrl: './operation-add.component.html',
  styleUrls: ['./operation-add.component.css']
})
export class OperationAddComponent implements OnInit {
  addForm!:FormGroup;
  addOperation!: Operation;

  constructor(private operationService: OperationService,
              private router: ActivatedRoute,
              private fb: FormBuilder,
              private location: Location,) { }

  ngOnInit(): void {
    this.addForm = this.createAddForm();
  }

  createAddForm():FormGroup{
    return this.fb.group({
      name:['',Validators.compose([Validators.required])]
    })
  }

  createOperation():void{
    this.operationService.createOperation({
      name:this.addForm.value.name,
      restrictions:this.addForm.value.restrictions
    }).subscribe(data=>{
      this.addOperation=data;
    })
    window.location.reload();
    this.location.back();
  }
}
