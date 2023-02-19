import { Component, OnInit } from '@angular/core';
import {Operation} from "../../models/operation";
import {OperationService} from "../../service/operation.service";

@Component({
  selector: 'app-mark-list',
  templateUrl: './operation-list.component.html',
  styleUrls: ['./operation-list.component.css']
})
export class OperationListComponent implements OnInit {

  operations!:Operation[];
  constructor(private operationService: OperationService) { }

  ngOnInit(): void {
    this.operationService.getAllOperations().subscribe(data=>{
      this.operations = data;
    });
  }
  removeOperation(mark: Operation):void{
    const message = confirm('Вы действительно хотите удалить данную операцию?')
    if(message){
      this.operationService.deleteOperation(mark.id).subscribe(()=>{
        this.operations.splice(<number>mark.id,1);
      });
      window.location.reload();
    }
  }
}
