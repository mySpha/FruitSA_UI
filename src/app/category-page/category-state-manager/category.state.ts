import { Category } from "../model/category";
import { Injectable } from "@angular/core";
import { State,StateContext,Action,Selector } from "@ngxs/store";
import { GetCategory } from "./category.actions";
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

    
    @Action(GetCategory)
    getAll({getState,patchState}:StateContext<CategoryStateModel>){
        const state = getState();

        this.service.category$.subscribe(data => state.categories = data);

        this.service.getCategory();

        patchState({
            categories: [...state.categories]
        });
    }
    
}