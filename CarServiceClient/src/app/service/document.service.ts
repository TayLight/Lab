import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Document} from "../models/document";

const DOCUMENT_API = 'http://localhost:8080/api/document/';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  constructor(private http: HttpClient) {
  }

  getAllDocuments(): Observable<any> {
    return this.http.get(DOCUMENT_API);
  }

  createDocument(document: Document): Observable<any> {
    return this.http.post(DOCUMENT_API, document);
  }

  updateDocument(document: Document): Observable<any> {
    return this.http.post(DOCUMENT_API, document);
  }

  getDocumentById(id: number): Observable<any> {
    return this.http.get(DOCUMENT_API + id);
  }

  deleteDocument(id: number | undefined): Observable<any> {
    return this.http.post(DOCUMENT_API + id, null);
  }
}
