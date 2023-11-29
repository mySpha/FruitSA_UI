import { Category } from "../model/category";
import { Injectable } from "@angular/core";
import { State,StateContext,Action,Selector } from "@ngxs/store";


export interface CategoryStateModel{
    categories: Category[],
    category: Category | null
}

@State<CategoryStateModel>({
    name: 'category-state',
    defaults: {
        categories: [],
        category: null
    }
})

@Injectable()
export class CategoryState{

}