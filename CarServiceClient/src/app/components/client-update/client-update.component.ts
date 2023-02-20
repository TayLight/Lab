import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Client} from "../../models/car";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {ClientService} from "../../service/client.service";
import {Contract} from "../../models/contract";
import {ContractService} from "../../service/contract.service";

@Component({
  selector: 'app-client-update',
  templateUrl: './client-update.component.html',
  styleUrls: ['./client-update.component.css']
})
export class ClientUpdateComponent implements OnInit {
  updateForm!: FormGroup;
  updateClient!: Client;
  contracts!: Contract[];

  constructor(private fb: FormBuilder,
              private router: ActivatedRoute,
              private location: Location,
              private clientService: ClientService,
              private contractService: ContractService) {
  }

  ngOnInit(): void {
    this.clientService.getClientById(this.router.snapshot.params['id_updateCar']).subscribe(data => {
      this.updateClient = data
    });
    this.contractService.getAllContract().subscribe(data =>{
      this.contracts = data;
    });
    this.updateForm = this.createUpdateForm();
  }

  createUpdateForm(): FormGroup {
    return this.fb.group({
      first_name: this.updateForm.value.first_name,
      last_name: this.updateForm.value.last_name,
      address: this.updateForm.value.address,
      passport_series: this.updateForm.value.address,
      passport_number: this.updateForm.value.address,
      phone_number: this.updateForm.value.address,
    })
  }

  update(): void {
    this.clientService.updateClient({
      id: this.updateClient.id = this.router.snapshot.params['id_updateClient'],
      firstName: this.updateForm.value.first_name,
      lastName: this.updateForm.value.last_name,
      address: this.updateForm.value.address,
      passportSeries: this.updateForm.value.address,
      passportNumber: this.updateForm.value.address,
      phoneNumber: this.updateForm.value.address,
    }).subscribe(data => {
      this.updateClient = data;
    })
    window.location.reload();
    this.back();
  }

  back(): void {
    this.location.back();
  }
}
