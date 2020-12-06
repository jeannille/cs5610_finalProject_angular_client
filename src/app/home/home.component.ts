import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from '../services/UserServiceClient';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  loggedIn = false;

  user = {
    _id: '',
    username: '',
    password: '',
    movies: '',
    firstName: '',
    lastName: '',
    email: '',
    editing: false
  };

  constructor( private userService: UserServiceClient,
               ) { }

   async ngOnInit(): Promise<void> {
    await this.isUserLoggedIn();
  }

  // check if user is logged in
  isUserLoggedIn =  async () => {
    // use session to find if user is logged in
    try {
      await this.userService.profile()
        .then(profile => this.user = profile);
      console.log(this.user._id);
    } catch (error) {
      window.alert(error);
    }
    // get local flag 'loggedIn'
    try {
      if (this.user._id !== undefined) {
        this.loggedIn = true;
        window.alert('HOME| loggedIn : ' + this.loggedIn);
      }
    } catch (error) {
      // console.log('HOME| loggedIn : ' + this.loggedIn);
      console.log('error');
    }
  }
}
