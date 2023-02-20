import {Component, OnInit} from '@angular/core';
import {ContractService} from "../../service/contract.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {Contract} from "../../models/contract";
import {ClientService} from "../../service/client.service";
import {Client} from "../../models/car";

@Component({
  selector: 'app-contract-update',
  templateUrl: './contract-update.component.html',
  styleUrls: ['./contract-update.component.css']
})
export class ContractUpdateComponent implements OnInit {
  updateForm!: FormGroup;
  updateContract!: Contract;
  client!:Client[];

  constructor(private contractService: ContractService,
              private fb: FormBuilder,
              private router: ActivatedRoute,
              private location: Location,
              private clientService: ClientService) {
  }

  ngOnInit(): void {
    this.contractService.getContractById(this.router.snapshot.params['id_updateClient']).subscribe(data => {
      this.updateContract = data
    });
    this.clientService.getAllClients().subscribe(data => {
      this.client = data;
    });
    this.updateForm = this.createUpdateForm();
  }

  createUpdateForm(): FormGroup {
    return this.fb.group({
      id: ['', Validators.compose([Validators.required])],
      name: ['', Validators.compose([Validators.required])],
      date_start: ['', Validators.compose([Validators.required])],
      date_end: ['', Validators.compose([Validators.required])],
      price: ['', Validators.compose([Validators.required])],
      car: ['', Validators.compose([Validators.required])],
      organization: ['', Validators.compose([Validators.required])],
      employee: ['', Validators.compose([Validators.required])]
    })
  }

  update(): void {
    this.contractService.updateContract({
      id: this.updateContract.id = this.router.snapshot.params['id_updateContract'],
      number: this.updateForm.value.number,
      client: {
        id: this.updateForm.value.client.id,
        address: this.updateForm.value.client.address,
        passportNumber: this.updateForm.value.client.passport_number,
        passportSeries: this.updateForm.value.client.passport_series,
        phoneNumber: this.updateForm.value.client.phone_number,
        firstName: this.updateForm.value.client.first_name,
        lastName: this.updateForm.value.client.last_name,
      },
    }).subscribe(data => {
      this.updateContract = data;
    })
    window.location.reload();
    this.back();
  }

  back(): void {
    this.location.back();
  }
}
