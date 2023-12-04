import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { CategoryState } from '../../category-state-manager/category.state';
import { Observable } from 'rxjs';
import { Category } from '../../model/category';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-datails',
  templateUrl: './category-datails.component.html',
  styleUrls: ['./category-datails.component.scss']
})
export class CategoryDatailsComponent implements OnInit{

  @Select(CategoryState.getCategoryDetails) detail$!: Observable<Category>;
  detail!: Category | null
  constructor(private store: Store,
    private router: Router){}

    ngOnInit(){
    this.store.select(CategoryState.getCategoryDetails).subscribe(data =>{
    this.detail = data});
}

goToEdit(){
  this.router.navigate(['category/edit'])
}
}


