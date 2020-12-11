import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserServiceClient} from '../services/UserServiceClient';
import {GlobalConstants} from '../../global';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = GlobalConstants.siteTitle;

  constructor(private router: Router,
              private service: UserServiceClient,
              ) { }

  username = '';
  password = '';

  login =  (username, password) => {
    this.service.login(username, password)
      .then(actualUser => {
        console.log(actualUser.errorMessage);
        if (actualUser.errorMessage === undefined) {
          this.router.navigate(['/profile']);
        } else {
          window.alert(actualUser.errorMessage);
        }
      });
  }


  ngOnInit(): void {
  }

}
