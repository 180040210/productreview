import { Feedback } from "./feedback";
import { Seller } from "./seller";

export class Product {
    productId!: number;
    productName!: String;
    productPrice!: number;
    category!: String;
    approve!: boolean;
    productUrl!:String;
    seller!: Seller;
    feedback:Feedback[]=[];
}
