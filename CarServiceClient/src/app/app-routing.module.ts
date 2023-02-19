import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./auth/login/login.component";
import {RegisterComponent} from "./auth/register/register.component";
import {AuthGuardService} from "./helper/auth-guard.service";
import {HeaderComponent} from "./header/header.component";
import {ContractListComponent} from "./components/contract-list/contract-list.component";
import {ContractUpdateComponent} from "./components/contract-update/contract-update.component";
import {ContractAddComponent} from "./components/contract-add/contract-add.component";
import {ClientAddComponent} from "./components/client-add/client-add.component";
import {ClientUpdateComponent} from "./components/client-update/client-update.component";
import {ClientListComponent} from "./components/client-list/client-list.component";
import {AccountAddComponent} from "./components/account-add/account-add.component";
import {AccountUpdateComponent} from "./components/account-update/account-update.component";
import {AccountListComponent} from "./components/account-list/account-list.component";
import {OperationUpdateComponent} from "./components/operation-update/operation-update.component";
import {OperationListComponent} from "./components/operation-list/operation-list.component";
import {OperationAddComponent} from "./components/operation-add/operation-add.component";
import {DocumentAddComponent} from "./components/document-add/document-add.component";
import {DocumentUpdateComponent} from "./components/document-update/document-update.component";
import {DocumentListComponent} from "./components/document-list/document-list.component";

const routes: Routes = [
  {path:'login',component: LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'service', canActivate:[AuthGuardService], children:[
      {path:'add', canActivate:[AuthGuardService], component:ContractAddComponent},
      {path:':id_updateCarservice',canActivate:[AuthGuardService],component: ContractUpdateComponent},
      {path:'', canActivate:[AuthGuardService],component: ContractListComponent},
    ]},
  {path:'car', canActivate:[AuthGuardService],children:[
      {path:'add', canActivate:[AuthGuardService], component: ClientAddComponent},
      {path:':id_updateCar', canActivate:[AuthGuardService], component: ClientUpdateComponent},
      {path:'', canActivate:[AuthGuardService], component: ClientListComponent}
    ]},
  {path:'organization', canActivate:[AuthGuardService],children:[
      {path:'add', canActivate:[AuthGuardService], component: AccountAddComponent},
      {path:':id_updateOrganization', canActivate:[AuthGuardService], component: AccountUpdateComponent},
      {path:'', canActivate:[AuthGuardService], component: AccountListComponent}
    ]},
  {path:'mark', canActivate:[AuthGuardService],children:[
      {path:'add', canActivate:[AuthGuardService], component: OperationAddComponent},
      {path:':id_updateMark', canActivate:[AuthGuardService], component: OperationUpdateComponent},
      {path:'', canActivate:[AuthGuardService], component: OperationListComponent}
    ]},
  {path:'employee', canActivate:[AuthGuardService],children:[
      {path:'add', canActivate:[AuthGuardService], component: DocumentAddComponent},
      {path:':id_updateEmployee', canActivate:[AuthGuardService], component: DocumentUpdateComponent},
      {path:'', canActivate:[AuthGuardService], component: DocumentListComponent}
    ]},
  {path:'',redirectTo:'login',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
