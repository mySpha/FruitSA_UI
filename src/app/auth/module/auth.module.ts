import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from 'src/app/angular-material/angular.material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from '../components/login/login.component';
import { RegisterComponent } from '../components/register/register.component';
import { AuthRoutingModule } from './auth.routing.module';
import { AuthDashboardComponent } from '../components/auth-dashboard/auth-dashboard.component';
import { UserState } from '../auth-state-manager/auth.state';
import { NgxsModule } from '@ngxs/store';



@NgModule({
  declarations: [
    AuthDashboardComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NgxsModule.forFeature([UserState]),
    
  ]
})
export class AuthModule { }
