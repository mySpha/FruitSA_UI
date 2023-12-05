import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product';
import { Select, Store } from '@ngxs/store';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductState } from '../../product-sate-manager/product.state';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit{

  @Select(ProductState.getProductDetails) detail$!: Observable<Product>;
  detail!: Product | null
  constructor(private store: Store,
    private router: Router){}

    ngOnInit(){
    this.store.select(ProductState.getProductDetails).subscribe(data =>{
    this.detail = data});
}

goToEdit(){
  this.router.navigate(['product/edit'])
}

}
