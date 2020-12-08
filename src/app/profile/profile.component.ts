import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from '../services/UserServiceClient';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user = {
    _id: '',
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    role: '',
    firstNameHide: false,
    lastNameHide:  false,
    emailHide:  false,
    editing: false,
    firstNameEditing: false,
    lastNameEditing:  false,
    emailEditing:  false,
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

  saveUser = () => {
    console.log(this.user);
    this.service.updateProfile(this.user._id, this.user)
      .then(actualUser => window.alert(JSON.stringify(actualUser)));
    // this.service.update(this.user._id, this.user)
    //   .then(status => window.alert('Your Changes have been Saved'));
  }

}
