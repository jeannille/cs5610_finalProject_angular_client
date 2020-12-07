import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from '../services/UserServiceClient';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router,
              private service: UserServiceClient) { }

  username = '';
  password = '';
  verifyPassword = '';
  role = '';
  firstName = '';
  lastName = '';
  email = '';

  register = (username, password, role, firstName, lastName, email) => {
    console.log(username, password, role, firstName, lastName, email);
    this.service.register(username, password, role, firstName, lastName, email)
      .then(actualUser => {
         console.log('USER REGISTERED:' , actualUser);
         this.router.navigate(['/profile']);
      });
  }

  ngOnInit(): void {
  }

}
