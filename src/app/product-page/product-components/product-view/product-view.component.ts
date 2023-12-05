import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Product } from '../../model/product';
import { Store } from '@ngxs/store';
import { Router } from '@angular/router';
import { DeleteProduct, GetProduct, GetProductDetails } from '../../product-sate-manager/product.action';
import { ProductState } from '../../product-sate-manager/product.state';
import { GetCategoryDetails } from 'src/app/category-page/category-state-manager/category.actions';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent implements OnInit,OnDestroy{
  sub! : Subscription;
  public dataSource!: MatTableDataSource<Product>;
  displayedColumns: string [] = ['fieldName','productCode','name','category','action'];

  constructor(private store: Store,
              private router: Router){}
  
    ngOnInit(){
      this.store.dispatch(new GetProduct());
      this.sub = this.store.select(ProductState.getProducts).subscribe(data =>{
        this.dataSource = new MatTableDataSource(data);
      });
    }
    onDelete(productId: number){
      this.store.dispatch(new DeleteProduct(productId))
    }
    
    viewProduct(product: Product){
      this.store.dispatch(new GetProductDetails(product))
      .subscribe(()=>this.router.navigate(['product/detail']));
      
    }
  
    add(){
      this.router.navigate(['product/add'])
    }

    ngOnDestroy(): void {
      this.sub.unsubscribe()
    }
  }
  