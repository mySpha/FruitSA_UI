import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from '@angular/router'


import { LoginComponent } from '../components/login/login.component';
import { AuthDashboardComponent } from '../components/auth-dashboard/auth-dashboard.component';
import { RegisterComponent } from '../components/register/register.component';

const routes: Routes =[
  {path: '', component : AuthDashboardComponent,
  children:[
    {path: 'login', component:LoginComponent},
    {path: 'register', component:RegisterComponent},
    {path: '', redirectTo: '/auth/login', pathMatch: 'full'},
    {path: '**', redirectTo: ''}
  ],
},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class AuthRoutingModule { }
