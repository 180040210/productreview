import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  product!: any[];
  searchText!:any;
  p: number=1;
  
    constructor(private Router: Router,private productService: ProductService) { }
  
    ngOnInit(): void {
      this.getproducts();
  
    }
    getFeedBackByProductId(id:number){
      this.Router.navigate(['feedback-details',id]);
  
    }
    avgRating(id:number){
    this.productService.avgRating(id).subscribe(data=>{
      alert("AvgRating: "+data);
      this.getproducts();
    })
    
    }
  
     
    
    addFeedback(id:number):void{
      this.Router.navigate(['create-feedback',id]);
    }
  
    private getproducts(){
      this.productService.getProductList().subscribe(data=>{
        this.product = data;
      });
    }
    updateproduct(id:number){
       this.Router.navigate(['update-product',id]);
  
    }
    deleteProduct(id: number){
      this.productService.deleteProduct(id).subscribe(data=>{
        console.log(data);
        this.getproducts();
      })
    }
    
}
