import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Client} from "../../models/car";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {ClientService} from "../../service/client.service";

@Component({
  selector: 'app-client-update',
  templateUrl: './client-update.component.html',
  styleUrls: ['./client-update.component.css']
})
export class ClientUpdateComponent implements OnInit {
  updateForm!:FormGroup;
  updateClient!:Client;

  constructor(private fb: FormBuilder,
              private router: ActivatedRoute,
              private location: Location,
              private clientService: ClientService) { }

  ngOnInit(): void {
    this.clientService.getClientById(this.router.snapshot.params['id_updateCar']).subscribe(data=> {
      this.updateClient = data
    });
    this.updateForm = this.createUpdateForm();
  }

  createUpdateForm():FormGroup{
    return this.fb.group({
      first_name:this.updateForm.value.first_name,
      last_name:this.updateForm.value.last_name,
      address:this.updateForm.value.address,
      passport_series:this.updateForm.value.address,
      passport_number:this.updateForm.value.address,
      phone_number:this.updateForm.value.address,
    })
  }

  update(): void{
    this.clientService.updateClient({
      id: this.updateClient.id=this.router.snapshot.params['id_updateClient'],
      first_name:this.updateForm.value.first_name,
      last_name:this.updateForm.value.last_name,
      address:this.updateForm.value.address,
      passport_series:this.updateForm.value.address,
      passport_number:this.updateForm.value.address,
      phone_number:this.updateForm.value.address,
    }).subscribe(data => {
      this.updateClient = data;
    })
    window.location.reload();
    this.back();
  }

  back():void{
    this.location.back();
  }
}