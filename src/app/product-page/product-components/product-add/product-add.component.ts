import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from '../../model/product';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/category-page/model/category';
import { Store } from '@ngxs/store';
import { Router } from '@angular/router';
import { ProductState } from '../../product-sate-manager/product.state';
import { CategoryState } from 'src/app/category-page/category-state-manager/category.state';
import { AddProduct } from '../../product-sate-manager/product.action';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit{
  @Output() submit = new EventEmitter();
  public editProductForm!: FormGroup;
  category!: Category | undefined
  categoryList!: Category[]
  constructor(private fb: FormBuilder,
              private store: Store,
              private router: Router){}

    ngOnInit(): void { 
        this.store.select(CategoryState.getAllCategories).subscribe(data =>{
          this.categoryList = data
        })

      this.initializeForm();
    }
  
    initializeForm(){
      this.editProductForm = this.fb.group({
        'fieldName': new FormControl('', Validators.required ),
        'productCode': new FormControl('', Validators.required ),
        'name': new FormControl('', Validators.required ),
        'description': new FormControl(''),
        'categoryId': new FormControl(this.category?.categoryId, Validators.required ),
        'price': new FormControl('', Validators.required ),
        'image': new FormControl('', Validators.required)
      })
    }

    selectionChange(value:any){
      this.category = value;
    }

    onSubmit(editProductForm: FormGroup){
      if(editProductForm.valid){
          this.store.dispatch(new AddProduct(editProductForm.value))
      .subscribe(()=>{
        this.router.navigate(['product/detail'])})
    }
      }
    

}

