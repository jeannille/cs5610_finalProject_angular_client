import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from '../services/UserServiceClient';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  user = {
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    editing: false
  };

  constructor(private router: Router,
              private service: UserServiceClient) { }

  ngOnInit(): void {
    this.service.profile()
      .then(profile => this.user = profile);
  }

  logout = () =>
    this.service.logout()
      .then(status => this.router.navigate(['/']))


}
