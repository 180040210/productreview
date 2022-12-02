import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'productreview';
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
}

