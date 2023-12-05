import { Component, OnDestroy, OnInit } from '@angular/core';
import { CategoryState } from '../../category-state-manager/category.state';
import { Select, Store } from '@ngxs/store';
import { Observable, Subscription } from 'rxjs';
import { Category } from '../../model/category';
import { GetCategory, GetCategoryDetails } from '../../category-state-manager/category.actions';
import { MatTableDataSource } from '@angular/material/table';
import { CategoryGetService } from '../../category-state-manager/service/category-get.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-category-view',
  templateUrl: './category-view.component.html',
  styleUrls: ['./category-view.component.scss']
})
export class CategoryViewComponent implements OnInit,OnDestroy{
sub! : Subscription;
public dataSource!: MatTableDataSource<Category>;
displayedColumns: string [] = ['Code','Name'];

constructor(private store: Store,
            private router: Router){}

  ngOnInit(){
    this.store.dispatch(new GetCategory());
    this.sub = this.store.select(CategoryState.getAllCategories).subscribe(data =>{
      this.dataSource = new MatTableDataSource(data);
    });
  }

  viewDetails(category: Category){
    this.store.dispatch(new GetCategoryDetails(category));
    this.router.navigate(['category/detail']);
  }
  add(){
    this.router.navigate(['category/add'])
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }
}
