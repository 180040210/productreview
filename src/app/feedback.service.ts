import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Feedback } from './feedback';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  // private Product product;
  private baseURL = "http://localhost:9090/"
  constructor(private httpClient: HttpClient ) { }
 
  getFeedBackList(): Observable<Feedback[]>{
    return this.httpClient.get<Feedback[]>(`${this.baseURL}allfeedback`)
  }
  createFeedback(id:number, feedback: Feedback): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}givefeedback/${id}`, feedback);
  }
  getFeedBackById(id:number): Observable<Feedback>{
    return this.httpClient.get<Feedback>(`${this.baseURL}getfeedback/${id}`);
  }
  updatefeedback(id:number,feedback:Feedback):Observable<object>{
    return this.httpClient.put(`${this.baseURL}update/${id}`,feedback);
  }
  deleteFeedback(id:number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}deletefeedback/${id}`)
  }
}
// deleteProduct(id: number): Observable<object>{
//   return this.httpClient.delete(`${this.baseURL}delete/${id}`);
// }