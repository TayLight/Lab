import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ClientService} from "../../service/client.service";
import {Client} from "../../models/car";
import {ContractService} from "../../service/contract.service";
import {Contract} from "../../models/contract";
import {Location} from "@angular/common";

@Component({
  selector: 'app-contract-add',
  templateUrl: './contract-add.component.html',
  styleUrls: ['./contract-add.component.css']
})
export class ContractAddComponent implements OnInit {
  addCarService!:Contract;
  addForm!:FormGroup;
  clients!: Client[];

  constructor(private fb : FormBuilder,
              private contractService: ContractService,
              private router: ActivatedRoute,
              private location: Location,
              private clientService: ClientService) { }

  ngOnInit(): void {
    this.clientService.getAllClients().subscribe(data =>{
      this.clients = data;
    });
    this.addForm = this.createAddForm();
  }
  createAddForm():FormGroup{
    return this.fb.group({
      name:['',Validators.compose([Validators.required])],
      date_start:['',Validators.compose([Validators.required])],
      date_end:['',Validators.compose([Validators.required])],
      price:['',Validators.compose([Validators.required])],
      car:['',Validators.compose([Validators.required])],
      organization:['',Validators.compose([Validators.required])],
      employee:['',Validators.compose([Validators.required])]
    })
  }

  createService():void{
    this.contractService.createContract({
      client: {
        id: this.addForm.value.client.id,
        address: this.addForm.value.client.address,
        passport_number: this.addForm.value.client.passport_number,
        passport_series: this.addForm.value.client.passport_series,
        phone_number: this.addForm.value.client.phone_number,
        first_name: this.addForm.value.client.first_name,
        last_name: this.addForm.value.client.last_name,
      },
    }).subscribe(data=>{
      this.addCarService=data;
    })
  }
}
