import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Client} from "../../models/car";
import {Operation} from "../../models/operation";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {ClientService} from "../../service/client.service";

@Component({
  selector: 'app-client-add',
  templateUrl: './client-add.component.html',
  styleUrls: ['./client-add.component.css']
})
export class ClientAddComponent implements OnInit {
  addForm!:FormGroup;
  addClient!:Client;
  marks!:Operation[];

  constructor(private fb: FormBuilder,
              private router: ActivatedRoute,
              private location: Location,
              private clientService: ClientService) { }

  ngOnInit(): void {
    this.addForm = this.createAddForm();
  }

  createAddForm():FormGroup{
    return this.fb.group({
      first_name:['',Validators.compose([Validators.required])],
      last_name:['',Validators.compose([Validators.required])],
      address:['',Validators.compose([Validators.required])],
      passport_series:['',Validators.compose([Validators.required])],
      passport_number:['',Validators.compose([Validators.required])],
      phone_number:['',Validators.compose([Validators.required])],
    })
  }

  createCar(): void{
    this.clientService.createClient({
      firstName:this.addForm.value.first_name,
      lastName:this.addForm.value.last_name,
      address:this.addForm.value.address,
      passportSeries:this.addForm.value.address,
      passportNumber:this.addForm.value.address,
      phoneNumber:this.addForm.value.address,
    }).subscribe(data => {
      this.addClient = data;
    })
    window.location.reload();
    this.back();
  }

  back():void{
    this.location.back();
  }
}
