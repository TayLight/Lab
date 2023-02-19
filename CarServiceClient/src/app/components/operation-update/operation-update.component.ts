import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Operation} from "../../models/operation";
import {OperationService} from "../../service/operation.service";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";

@Component({
  selector: 'app-mark-update',
  templateUrl: './operation-update.component.html',
  styleUrls: ['./operation-update.component.css']
})
export class OperationUpdateComponent implements OnInit {
  updateForm!:FormGroup;
  updateOperation!: Operation;

  constructor(private operationService: OperationService,
              private router: ActivatedRoute,
              private fb: FormBuilder,
              private location: Location,) { }

  ngOnInit(): void {
    this.operationService.getOperationById(this.router.snapshot.params['id_updateOperation']).subscribe(data=> {
      this.updateOperation = data
    });
    this.updateForm = this.createUpdateForm();
  }

  createUpdateForm():FormGroup{
    return this.fb.group({
      name:['',Validators.compose([Validators.required])]
    })
  }

  update(): void{
    this.operationService.updateOperation({
      id: this.updateOperation.id=this.router.snapshot.params['id_updateOperation'],
      name:this.updateForm.value.name,
      restrictions:this.updateForm.value.restrictions,
    }).subscribe(data => {
      this.updateOperation = data;})
    window.location.reload();
    this.back();
  }
  back():void{
    this.location.back();
  }
}
