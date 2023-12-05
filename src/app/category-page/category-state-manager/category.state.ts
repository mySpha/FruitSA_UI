import { Category } from "../model/category";
import { Injectable } from "@angular/core";
import { State,StateContext,Action,Selector } from "@ngxs/store";
import { AddCategory, GetCategory,GetCategoryDetails, UpdateCategory } from "./category.actions";
import { CategoryGetService } from "./service/category-get.service";
import { CategoryUpdateService } from "./service/category-update.service";
import { CategoryAddService } from "./service/category-add.service";


export interface CategoryStateModel{
    categories: Category[],
    category: Category | null
}

@State<CategoryStateModel>({
    name: 'CategoryState',
    defaults: {
        categories: [],
        category: null
    }
})

@Injectable()
export class CategoryState{

    constructor(private getService: CategoryGetService,
                private updateService: CategoryUpdateService,
                private addService: CategoryAddService){}

    @Selector()
    public static getAllCategories(state: CategoryStateModel){
        return state.categories;
    }

    @Selector()
    public static getCategoryDetails(state: CategoryStateModel){
        return state.category;
    }
    
    @Action(GetCategory)
    getAll({patchState}:StateContext<CategoryStateModel>){
        this.getService.category$.subscribe(data =>{
            patchState({
                categories: data
            });
        });
        this.getService.getCategory();
    }

    @Action(GetCategoryDetails)
    getDetails({patchState}:StateContext<CategoryStateModel>, {payload}:GetCategoryDetails){
        patchState({
            category: payload
        });
    }

    @Action(UpdateCategory)
    update({patchState}:StateContext<CategoryStateModel>, {payload}:UpdateCategory){
            patchState({
                category: payload
            });
        this.updateService.updateCategory(payload);
    }

    @Action(AddCategory)
    add({}:StateContext<CategoryStateModel>, {payload}:AddCategory){
        this.addService.addCategory(payload);
    }
    
}