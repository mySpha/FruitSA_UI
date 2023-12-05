import { Injectable } from "@angular/core";
import { State,StateContext,Action,Selector } from "@ngxs/store";
import { Product } from "../model/product";
import { AddProduct, DeleteProduct, GetProduct, GetProductDetails, UpdateProduct } from "./product.action";
import { GetProductService } from "./service/get-product.service";
import { ProductUpdateService } from "./service/product-update.service";
import { ProductDeleteService } from "./service/product-delete.service";
import { ProductAddService } from "./service/product-add.service";


export interface ProductStateModel{
    products: Product[],
    product: Product | null
}

@State<ProductStateModel>({
    name: 'ProductState',
    defaults: {
        products: [],
        product: null
    }
})

@Injectable()
export class ProductState{

    constructor(private getProductsService: GetProductService,
                private updateService: ProductUpdateService,
                private deleteService: ProductDeleteService,
                private addService: ProductAddService){}

    @Selector()
    public static getProducts(state: ProductStateModel){
        return state.products;
    }

    @Selector()
    public static getProductDetails(state: ProductStateModel){
        return state.product;
    }
    
    @Action(GetProduct)
    getAll({patchState}:StateContext<ProductStateModel>){
        this.getProductsService.products$.subscribe(data =>{
            patchState({
                products: data
            });
        });
        this.getProductsService.getProducts();
    }

    @Action(GetProductDetails)
    get({patchState}:StateContext<ProductStateModel>, {payload}:GetProductDetails){
        patchState({
            product: payload
        });
    }

    @Action(UpdateProduct)
    update({patchState}:StateContext<ProductStateModel>, {payload}:UpdateProduct){
       this.updateService.updateProduct(payload)
       this.updateService.product$.subscribe(data =>{
        patchState({
            product: data
        })
       })
    }

    @Action(AddProduct)
    add({patchState}:StateContext<ProductStateModel>, {payload}:AddProduct){
        this.addService.addProduct(payload)
        patchState({
            product: payload
        });
    }

    @Action(DeleteProduct)
    delete({getState,patchState}:StateContext<ProductStateModel>, {payload}:DeleteProduct){
        this.deleteService.deleteProduct(payload)
        patchState({
            products: getState().products.filter(p => p.productId != payload)
        });
    }
    
}