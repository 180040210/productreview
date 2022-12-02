import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Host } from '../host';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
user!:any;
searchText:any;
p=1;
  constructor(private router:Router,private registrationservice:RegistrationService) { }

  ngOnInit(): void {
    this.getUsers();
  }
  getUsers(){
  this.registrationservice.getUserList().subscribe(data=>{
    this.user = data;
  });
  }

}
