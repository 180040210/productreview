import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { Host } from '../host';
import { RegistrationService } from '../registration.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // user = new Host();
  // msg='';
  username: string="";
  password: string="";
  show:boolean=false;

  constructor(private _service : RegistrationService, private _router : Router) { }

  ngOnInit(): void {
  }


  login() : void {
    if(this.username == 'admin@gmail.com' && this.password == 'admin'){
     this._router.navigate(['product-list']);
     this.show=true;
    }else {
      this._router.navigate(['admin'])

    }

  }

  }

  // username: string="";
  // password: string="";
  // show:boolean=false;

  // constructor(private router: Router) { }

  // login() : void {
  //   if(this.username == 'admin' && this.password == 'admin'){
  //    this.router.navigate(['/prodcut-list']);
  //    this.show=true;
  //   }else {
  //     alert("Invalid credentials");
  //   }

  // }