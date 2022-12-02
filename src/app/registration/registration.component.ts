import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Host } from '../host';
import { RegistrationService } from '../registration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  user =new Host();
  msg='';

  constructor(private _service : RegistrationService,private _router : Router) { }

  ngOnInit(): void {
  }
  registerUser(){
    this._service.registerUserFromRemote(this.user).subscribe({
      next: (data)=>{
        console.log("response received")
        // this._router.navigate(['/login'])
      },
      error: (error) => {
        console.log("Exception occured")
        // this.msg=error.error;
      },
      complete: ()=> console.log('complete')
      
  })

  }
}
