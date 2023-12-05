import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from '@angular/router'
import { CategoryViewComponent } from '../category-components/category-view/category-view.component';
import { CategoryDatailsComponent } from '../category-components/category-datails/category-datails.component';
import { CategoryEditComponent } from '../category-components/category-edit/category-edit.component';
import { CategoryDashboardComponent } from '../category-components/category-dashboard/category-dashboard.component';
import { AuthGuard } from 'src/app/auth/auth-state-manager/gaurd/routing-gauds';
import { CategoryAddComponent } from '../category-components/category-add/category-add.component';

const routes: Routes =[
  {path: '', component : CategoryDashboardComponent,
  canActivate: [AuthGuard],
  children : [ 
    {path: 'summary', component : CategoryViewComponent},
    {path: 'detail', component : CategoryDatailsComponent},
    {path: 'edit', component : CategoryEditComponent},
    {path: 'add', component : CategoryAddComponent},
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
  exports:[RouterModule],
  providers:[AuthGuard]
})
export class CategoryRoutingModule { }
