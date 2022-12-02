import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Feedback } from './feedback';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseURL = "http://localhost:9090/"
  constructor(private httpClient: HttpClient) { }
  getProductList(): Observable<Product[]>{
    return this.httpClient.get<Product[]>(`${this.baseURL}`+'allproducts');
  }
 
  createProduct(product: Product): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`+'addproduct', product);
  }
  getProductById(id:number): Observable<Product>{
    return this.httpClient.get<Product>(`${this.baseURL}getproduct/${id}`);
  }
  updateProduct(id: number,product:Product):Observable<object>{
    return this.httpClient.put(`${this.baseURL}edit/${id}`, product);
  }
  deleteProduct(id: number): Observable<object>{
    return this.httpClient.delete(`${this.baseURL}delete/${id}`);
  }
  getFeedBackByProductId(id: number): Observable<Feedback[]>{
    return this.httpClient.get<Feedback[]>(`${this.baseURL}feedback/${id}`);

  }
  avgRating(id:number):Observable<Product>{
    return this.httpClient.get<Product>(`${this.baseURL}avgrating/${id}`)
  }
  // getProductById(id:number): Observable<Product>{
  //   return this.httpClient.get<Product>(`${this.baseURL}getfeedback/${id}`);
  // }
}

// getFeedBackById(id:number): Observable<Feedback>{
//   return this.httpClient.get<Feedback>(`${this.baseURL}getfeedback/${id}`);
// }