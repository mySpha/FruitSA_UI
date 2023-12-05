import { Product } from "../model/product"
import { ProductUpdate } from "../model/updateProduct"


export class GetProduct {
    static readonly type = '[Product] get all'
    constructor(){}
}

export class GetProductDetails{
    static readonly type = '[Product] get details'
    constructor(public  payload: Product){}
}

export class UpdateProduct{
    static readonly type = '[Product] update' 
    constructor(public payload: ProductUpdate){}
}

export class AddProduct{
    static readonly type = '[Product] add' 
    constructor(public payload: Product){}
}

export class DeleteProduct{
    static readonly type = '[Product] delete' 
    constructor(public payload: number){}
}