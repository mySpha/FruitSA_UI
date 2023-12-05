import { Category } from "../model/category";

export class GetCategory {
    static readonly type = '[CATEGORY] get all'
    constructor(){}
}

export class GetCategoryDetails{
    static readonly type = '[CATEGORY] get details'
    constructor(public  payload: Category){}
}

export class UpdateCategory{
    static readonly type = '[CATEGORY] update' 
    constructor(public payload: Category){}
}

export class AddCategory{
    static readonly type = '[CATEGORY] add' 
    constructor(public payload: Category){}
}