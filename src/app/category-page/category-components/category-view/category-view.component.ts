import { Component } from '@angular/core';
import { CategoryState } from '../../category-state-manager/category.state';
import { Select, Store } from '@ngxs/store';
import { Observable, Subscription } from 'rxjs';
import { Category } from '../../model/category';
import { GetCategory } from '../../category-state-manager/category.actions';

@Component({
  selector: 'app-category-view',
  templateUrl: './category-view.component.html',
  styleUrls: ['./category-view.component.scss']
})
export class CategoryViewComponent {
 // @Select(CategoryState.getAllCategories) categories$! : Observable<Category[]>
sub : Subscription = new Subscription();
cat$ : Observable<Category[]> = new Observable<Category[]>

constructor(private store: Store){}
  ngOnInit(){
    //this.sub = this.cat$.subscribe(data=> data = this.store.dispatch(new GetCategory()))
    this.cat$ = this.store.dispatch(new GetCategory())
    console.log(this.store.dispatch(new GetCategory()))
  }

}
