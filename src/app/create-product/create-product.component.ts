import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { Validators } from '@angular/forms';
import { Seller } from '../seller';
@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
product:Product = new Product();
seller: Seller[]=[];

  constructor(private router: Router,private productservice:ProductService) { }

  ngOnInit(): void {
  }
  saveProduct(){
    this.productservice.createProduct(this.product).subscribe({

      next:(data) => console.log(data),
  
      error: (e) => console.log(e),
  
      complete:() => console.info('complete'),
      })
    }
  onSubmit(){
    this.router.navigate(['product-list']);
  console.log(this.product);
  this.saveProduct();
  }
  }
