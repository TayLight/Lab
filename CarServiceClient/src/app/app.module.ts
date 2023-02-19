import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { ContractListComponent } from './components/contract-list/contract-list.component';
import {authInterceptorProviders} from "./helper/auth-interceptor.service";
import { ContractUpdateComponent } from './components/contract-update/contract-update.component';
import { ContractAddComponent } from './components/contract-add/contract-add.component';
import { OperationListComponent } from './components/operation-list/operation-list.component';
import { OperationUpdateComponent } from './components/operation-update/operation-update.component';
import { OperationAddComponent } from './components/operation-add/operation-add.component';
import { AccountAddComponent } from './components/account-add/account-add.component';
import { AccountListComponent } from './components/account-list/account-list.component';
import { AccountUpdateComponent } from './components/account-update/account-update.component';
import { DocumentUpdateComponent } from './components/document-update/document-update.component';
import { DocumentAddComponent } from './components/document-add/document-add.component';
import { DocumentListComponent } from './components/document-list/document-list.component';
import { ClientListComponent } from './components/client-list/client-list.component';
import { ClientAddComponent } from './components/client-add/client-add.component';
import { ClientUpdateComponent } from './components/client-update/client-update.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HeaderComponent,
    ContractListComponent,
    ContractUpdateComponent,
    ContractAddComponent,
    OperationListComponent,
    OperationUpdateComponent,
    OperationAddComponent,
    AccountAddComponent,
    AccountListComponent,
    AccountUpdateComponent,
    DocumentUpdateComponent,
    DocumentAddComponent,
    DocumentListComponent,
    ClientListComponent,
    ClientAddComponent,
    ClientUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
