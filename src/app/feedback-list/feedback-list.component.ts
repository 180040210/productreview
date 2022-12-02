import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Feedback } from '../feedback';
import { FeedbackService } from '../feedback.service';

@Component({
  selector: 'app-feedback-list',
  templateUrl: './feedback-list.component.html',
  styleUrls: ['./feedback-list.component.css']
})
export class FeedbackListComponent implements OnInit {
  feedback!:Feedback[];
  searchText!:any;
p: number=1;
  constructor(private router:Router,private feedbackservice:FeedbackService) { }

  ngOnInit(): void {
    this.getfeedbacks();
  }
  private getfeedbacks(){
    this.feedbackservice.getFeedBackList().subscribe(data=>{
      this.feedback = data;
    });
  }
updatefeedback(id: number){
  this.router.navigate(['update-feedback', id]);
}
deleteFeedback(id: number){
  this.feedbackservice.deleteFeedback(id).subscribe(data=>{
    console.log(data);
    this.getfeedbacks();
  })
}
}
