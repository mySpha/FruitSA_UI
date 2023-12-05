import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { CategoryState } from '../../category-state-manager/category.state';
import { Category } from '../../model/category';
import { UpdateCategory } from '../../category-state-manager/category.actions';
import { categoryCodeValidator } from '../../validators/catogory-code.validator';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.scss']
})
export class CategoryEditComponent implements OnInit{
  @Output() submitEM = new EventEmitter();
  public editCategoryForm!: FormGroup;
  category!: Category | null
  isValidOptions : any[] = [{'value':true, display:'true'},
                            {'value':false, display:'false'}]
  selected: boolean | undefined;
  @Output() submit = new EventEmitter()
  constructor(private fb: FormBuilder,
              private store: Store,
              private router: Router){}
  
  ngOnInit(): void {    
    this.store.select(CategoryState.getCategoryDetails).subscribe(data =>{
    this.category = data
  this.selected = data?.isActive});
    this.initializeForm();
  }

  initializeForm(){
    this.editCategoryForm = this.fb.group({
      'categoryId': new FormControl(this.category?.categoryId, Validators.required ),
      'name': new FormControl(this.category?.name, Validators.required ),
      'categoryCode': new FormControl(this.category?.categoryCode, [Validators.required,categoryCodeValidator()]),
      'isActive': new FormControl(this.selected, Validators.required)
    })
  }
  selectionChange(value: any){
    this.selected = value;
  }
  onSubmit(loginForm : FormGroup){
    if (loginForm.valid) {
      this.store.dispatch(new UpdateCategory(loginForm.value)).subscribe(()=>{
        this.router.navigate(['category/detail'])
      })
    }
  }
}