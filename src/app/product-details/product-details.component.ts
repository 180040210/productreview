import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Feedback } from '../feedback';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  id!:number;
  product!:any
  f:Feedback[]=[]
  constructor(private route: ActivatedRoute,private productservice: ProductService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.product = new Product();
    this.productservice.getProductById(this.id).subscribe(data=>{
      this.product = data;
    })
  }


}