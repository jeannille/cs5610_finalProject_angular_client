import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from '../services/UserServiceClient';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private router: Router,
              private service: UserServiceClient) { }

  user = {
    username: '',
    firstName: '',
    lastName: '',
    email: ''
  }

  logout = () =>
    this.service.logout()
      .then(status => this.router.navigate(['/']))

  ngOnInit(): void {
    this.service.profile()
      .then(profile => this.user = profile)
  }

}
