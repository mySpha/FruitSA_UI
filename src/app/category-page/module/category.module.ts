import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryDatailsComponent } from '../category-components/category-datails/category-datails.component';
import { CategoryEditComponent } from '../category-components/category-edit/category-edit.component';
import { CategoryViewComponent } from '../category-components/category-view/category-view.component';
import { CategoryRoutingModule } from './category-routing.module';



@NgModule({
  declarations: [    
    CategoryViewComponent,
    CategoryDatailsComponent,
    CategoryEditComponent
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule
  ]
})
export class CategoryModule { }
