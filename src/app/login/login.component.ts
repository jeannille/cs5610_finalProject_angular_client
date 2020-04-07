import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserServiceClient} from '../services/UserServiceClient';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,
              private service: UserServiceClient) { }

  username = ''
  password = ''

  login = (username, password) => {
    this.service.login(username, password)
      .then(actualUser => {
        this.router.navigate(['/profile'])
      })
  }


  ngOnInit(): void {
  }

}
