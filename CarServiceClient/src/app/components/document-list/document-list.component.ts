import { Component, OnInit } from '@angular/core';
import {Document} from "../../models/document";
import {DocumentService} from "../../service/document.service";

@Component({
  selector: 'app-employee-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit {

  documents!:Document[];
  constructor(private documentService: DocumentService) { }

  ngOnInit(): void {
    this.documentService.getAllDocuments().subscribe(data=>{
      this.documents = data;
    });
  }
  removeEmployee(document: Document):void{
    const message = confirm('Вы действительно хотите удалить данный документ?')
    if(message){
      this.documentService.deleteDocument(document.id).subscribe(()=>{
        this.documents.splice(<number>document.id,1);
      });
      window.location.reload();
    }
  }
}
