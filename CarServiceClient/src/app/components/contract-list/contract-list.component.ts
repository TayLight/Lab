import { Component, OnInit } from '@angular/core';
import {Contract} from "../../models/contract";
import {ContractService} from "../../service/contract.service";

@Component({
  selector: 'app-client-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css']
})
export class ContractListComponent implements OnInit {
  contracts!:Contract[];
  constructor(private contractService: ContractService) { }

  ngOnInit(): void {
    this.contractService.getAllContract().subscribe(data=> {
      this.contracts=data;
    });

  }
  removeContract(contract: Contract):void{
    const message = confirm('Вы действительно хотите удалить данный контракт?')
    if(message){
      this.contractService.deleteContract(contract.id).subscribe(()=>{
        this.contracts.splice(<number>contract.id,1);
      });
      window.location.reload();
    }
  }
}
