import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDeleteComponent } from '../product-components/product-delete/product-delete.component';
import { ProductDetailsComponent } from '../product-components/product-details/product-details.component';
import { ProductViewComponent } from '../product-components/product-view/product-view.component';
import { ProductDashboardComponent } from '../product-components/product-dashboard/product-dashboard.component';
import { ProductEditComponent } from '../product-components/product-edit/product-edit.component';
import { AuthGuard } from 'src/app/auth/auth-state-manager/gaurd/routing-gauds';
import { RouterModule, Routes } from '@angular/router';
import { ProductAddComponent } from '../product-components/product-add/product-add.component';


const routes: Routes =[
  {path: '', component : ProductDashboardComponent,
  canActivate: [AuthGuard],
  children : [ 
    {path: 'summary', component : ProductViewComponent},
    {path: 'detail', component : ProductDetailsComponent},
    {path: 'edit', component : ProductEditComponent},
    {path: 'delete', component : ProductDeleteComponent},
    {path: 'add', component : ProductAddComponent},
    {path: '', redirectTo: '/product/summary', pathMatch: 'full'},
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
  exports:[RouterModule],
  providers:[AuthGuard]
})
export class ProductRoutingModule { }
