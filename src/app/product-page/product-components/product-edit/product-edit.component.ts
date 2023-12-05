import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { UpdateProduct } from '../../product-sate-manager/product.action';
import { Product } from '../../model/product';
import { ProductState } from '../../product-sate-manager/product.state';
import { Category } from 'src/app/category-page/model/category';
import { CategoryState } from 'src/app/category-page/category-state-manager/category.state';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit{
  @Output() submit = new EventEmitter();
  product! : Product |null;
  public editProductForm!: FormGroup;
  category!: Category | undefined
  categoryList!: Category[]
  constructor(private fb: FormBuilder,
              private store: Store,
              private router: Router){}

    ngOnInit(): void { 
      this.store.select(ProductState.getProductDetails).subscribe(data =>{
          this.product = data
          this.category = data?.category
        })
        this.store.select(CategoryState.getAllCategories).subscribe(data =>{
          this.categoryList = data
        })

      this.initializeForm();
    }
  
    initializeForm(){
      this.editProductForm = this.fb.group({
        'fieldName': new FormControl(this.product?.fieldName, Validators.required ),
        'productId': new FormControl(this.product?.productId, Validators.required ),
        'productCode': new FormControl(this.product?.productCode, Validators.required ),
        'name': new FormControl(this.product?.name, Validators.required ),
        'description': new FormControl(this.product?.description),
        'categoryId': new FormControl(this.category?.categoryId, Validators.required ),
        'price': new FormControl(this.product?.price, Validators.required ),
        'image': new FormControl(this.product?.image, Validators.required)
      })
    }

    selectionChange(value:any){
      this.category = value;
      console.log(value)
    }

    onSubmit(editProductForm: FormGroup){
      if(editProductForm.valid){
              this.store.dispatch(new UpdateProduct(editProductForm.value))
      .subscribe(()=>{
        this.router.navigate(['product/detail'])})
      }

    }

}
