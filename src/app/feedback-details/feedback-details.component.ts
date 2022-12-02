import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Feedback } from '../feedback';
import { FeedbackService } from '../feedback.service';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-feedback-details',
  templateUrl: './feedback-details.component.html',
  styleUrls: ['./feedback-details.component.css']
})
export class FeedbackDetailsComponent implements OnInit {
id!:number;
  productFeedback!:any
  searchText!:any;
p: number=1;

  constructor(private route: ActivatedRoute,private productservice: ProductService,private feedbackservice:FeedbackService) { }

  ngOnInit(): void {
    this.id= this.route.snapshot.params['id'];
    this.productservice.getFeedBackByProductId(this.id).subscribe({
      next :(data)=>{console.log(data)
      this.productFeedback = data},
      error: (e)=>console.log(e),
      complete:() => console.info('complete')
    })

    
  }

 

}

