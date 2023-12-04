import { Category } from "../model/category";
import { Injectable } from "@angular/core";
import { State,StateContext,Action,Selector } from "@ngxs/store";
import { GetCategory,GetCategoryDetails } from "./category.actions";
import { CategoryGetService } from "./service/category-get.service";


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

    constructor(private service: CategoryGetService){}

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
        this.service.category$.subscribe(data =>{
            patchState({
                categories: data
            });
        });
        this.service.getCategory();
    }

    @Action(GetCategoryDetails)
    getDetails({patchState}:StateContext<CategoryStateModel>, {payload}:GetCategoryDetails){
        patchState({
            category: payload
        });
    }
    
}