import { Category } from "src/app/category-page/model/category";

export interface Product{
fieldName: string;
productId: number;
productCode: string;
name: string;
description:string;
category: Category;
price:string;
image: string;
}