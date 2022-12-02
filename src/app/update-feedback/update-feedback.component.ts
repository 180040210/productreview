import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Feedback } from '../feedback';
import { FeedbackService } from '../feedback.service';

@Component({
  selector: 'app-update-feedback',
  templateUrl: './update-feedback.component.html',
  styleUrls: ['./update-feedback.component.css']
})
export class UpdateFeedbackComponent implements OnInit {
id!:number;
feedback: Feedback= new Feedback();
  constructor(private feedbackservice: FeedbackService,private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
this.id = this.route.snapshot.params['id'];
this.feedbackservice.getFeedBackById(this.id).subscribe({

        next:(data) => this.feedback = data,
    
        error: (e) => console.log(e),
    
        complete:() => console.info('complete'),
        })
  }
  onSubmit(){
    this.feedbackservice.updatefeedback(this.id,this.feedback).subscribe({

            next:(data) => console.log(data),
        
            error: (e) => console.log(e),
        
            complete:() => console.info('complete'),
            })
            this.router.navigate(['feedback-list'])
  }

}
