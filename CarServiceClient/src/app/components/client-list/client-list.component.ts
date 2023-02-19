import { Component, OnInit } from '@angular/core';
import {ClientService} from "../../service/client.service";
import {Client} from "../../models/car";

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {
  clients!:Client[];
  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.clientService.getAllClients().subscribe(data=>{
      this.clients = data;
    });
  }
  removeCar(car: Client):void{
    const message = confirm('Вы действительно хотите удалить данного клиента?')
    if(message){
      this.clientService.deleteClient(car.id).subscribe(()=>{
        this.clients.splice(<number>car.id,1);
      });
      window.location.reload();
    }
  }
}
