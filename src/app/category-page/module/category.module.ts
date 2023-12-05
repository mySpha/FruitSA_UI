import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryRoutingModule } from './category-routing.module';
import { NgxsModule } from '@ngxs/store';
import { CategoryState } from '../category-state-manager/category.state';
import { HttpClientModule } from '@angular/common/http';

import { CategoryDashboardComponent } from '../category-components/category-dashboard/category-dashboard.component';
import { CategoryDatailsComponent } from '../category-components/category-datails/category-datails.component';
import { CategoryEditComponent } from '../category-components/category-edit/category-edit.component';
import { CategoryViewComponent } from '../category-components/category-view/category-view.component';
import { AngularMaterialModule } from 'src/app/angular-material/angular.material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategoryAddComponent } from '../category-components/category-add/category-add.component';


@NgModule({
  declarations: [  
    CategoryDashboardComponent,  
    CategoryViewComponent,
    CategoryDatailsComponent,
    CategoryEditComponent,
    CategoryAddComponent,

  ],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    NgxsModule.forFeature([CategoryState]),
    HttpClientModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class CategoryModule { }
