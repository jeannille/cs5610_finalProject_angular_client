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

  register = (username, password, role, firstName, lastName) => {
    console.log(username, password, role, firstName, lastName);
    this.service.register(username, password, role, firstName, lastName)
      .then(actualUser => {
        // console.log(actualUser)
        this.router.navigate(['/profile']);
      });
  }

  ngOnInit(): void {
  }

}
