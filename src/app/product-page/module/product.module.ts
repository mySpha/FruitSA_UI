import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDashboardComponent } from '../product-components/product-dashboard/product-dashboard.component';
import { ProductDeleteComponent } from '../product-components/product-delete/product-delete.component';
import { ProductDetailsComponent } from '../product-components/product-details/product-details.component';
import { ProductEditComponent } from '../product-components/product-edit/product-edit.component';
import { ProductViewComponent } from '../product-components/product-view/product-view.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from 'src/app/angular-material/angular.material.module';
import { ProductRoutingModule } from './product-routing.module';
import { ProductState } from '../product-sate-manager/product.state';
import { NgxsModule } from '@ngxs/store';
import { ProductAddComponent } from '../product-components/product-add/product-add.component';



@NgModule({
  declarations: [
    ProductDashboardComponent,
    ProductDeleteComponent,
    ProductEditComponent,
    ProductDetailsComponent,
    ProductViewComponent,
    ProductAddComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    ProductRoutingModule,
    NgxsModule.forFeature([ProductState]),
  ]
})
export class ProductModule { }
