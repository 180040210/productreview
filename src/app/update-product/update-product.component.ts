import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
id!:number;
product: Product = new Product();
  constructor(private productservice:ProductService,private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.productservice.getProductById(this.id).subscribe({

      next:(data) => this.product = data,
  
      error: (e) => console.log(e),
  
      complete:() => console.info('complete'),
      })
  }
  onSubmit(){
    this.productservice.updateProduct(this.id,this.product).subscribe({

      next:(data) => console.log(data),
  
      error: (e) => console.log(e),
  
      complete:() => console.info('complete'),
      })
      this.router.navigate(['product-list'])
  }

}

