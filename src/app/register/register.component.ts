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

  username = ''
  password = ''
  verifyPassword = ''

  register = (username, password) => {
    console.log(username, password)
    this.service.register(username, password)
      .then(actualUser => {
        // console.log(actualUser)
        this.router.navigate(['/profile'])
      })
  }

  ngOnInit(): void {
  }

}
