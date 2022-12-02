import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Feedback } from '../feedback';
import { FeedbackService } from '../feedback.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-feedback',
  templateUrl: './create-feedback.component.html',
  styleUrls: ['./create-feedback.component.css']
})
export class CreateFeedbackComponent implements OnInit {
  id!:number;
feedback:Feedback = new Feedback();
  constructor(private router:Router,private route: ActivatedRoute,private feedbackservice: FeedbackService) { }

  ngOnInit(): void {
    this.id= this.route.snapshot.params['id'];
  }
  saveFeedback(){
    this.feedbackservice.createFeedback(this.id, this.feedback).subscribe({
      next: (data)=>{
      console.log(data);
      alert("feedbackadded Sucessfully");
      this.goToFeedbacklist();
    },
    error: error =>console.log(error),
    complete: ()=> console.log('complete')});
  }
  goToFeedbacklist(){
    this.router.navigate(['feedback-list']);
  }


onSubmit(){
console.log(this.feedback);
this.saveFeedback();
}
}
