import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { AddCategory } from '../../category-state-manager/category.actions';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.scss']
})
export class CategoryAddComponent implements OnInit{
  @Output() submit = new EventEmitter();
  public addCategoryForm!: FormGroup;
  constructor(private fb: FormBuilder,
              private store: Store,
              private router: Router){}

    ngOnInit(): void { 
      this.initializeForm();
    }
  
    initializeForm(){
      this.addCategoryForm = this.fb.group({
        'name': new FormControl('', Validators.required ),
        'categoryCode': new FormControl('', Validators.required)
      })
    }

    onSubmit(addCategoryForm: FormGroup){
      this.store.dispatch(new AddCategory(addCategoryForm.value))
      .subscribe(()=>this.router.navigate(['category/summary']))
    }
}
