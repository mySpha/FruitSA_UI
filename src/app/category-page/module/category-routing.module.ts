import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from '@angular/router'
import { CategoryViewComponent } from '../category-components/category-view/category-view.component';

const routes: Routes =[
  {path: 'category-view', component : CategoryViewComponent},
  {path: '', redirectTo: 'category-view', pathMatch: 'full'},
  {path: '**', redirectTo: ''}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CategoryRoutingModule { }
