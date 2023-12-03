import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from '@angular/router'
import { CategoryViewComponent } from '../category-components/category-view/category-view.component';
import { CategoryDatailsComponent } from '../category-components/category-datails/category-datails.component';
import { CategoryEditComponent } from '../category-components/category-edit/category-edit.component';
import { CategoryDashboardComponent } from '../category-components/category-dashboard/category-dashboard.component';

const routes: Routes =[
  {path: '', component : CategoryDashboardComponent,
  children : [ 
    {path: 'summary', component : CategoryViewComponent},
    {path: 'detail', component : CategoryDatailsComponent},
    {path: 'edit', component : CategoryEditComponent},
    {path: '', redirectTo: '/category/summary', pathMatch: 'full'},
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
export class CategoryRoutingModule { }
