import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserServiceClient} from '../services/UserServiceClient';

@Component({
  selector: 'app-profile-anon',
  templateUrl: './profile-anon.component.html',
  styleUrls: ['./profile-anon.component.css']
})
export class ProfileAnonComponent implements OnInit {

  // params.subscribe parameter
  userID = '';
  // user Profile of userID
  user = {
    _id: '',
    username: '',
    password: '',
    movies: '',
    firstName: '',
    lastName: '',
    email: '',
    editing: false,
    moviesDisplay: false,
    firstNameDisplay: false,
    lastNameDisplay: false,
    emailDisplay: false,
  };

  constructor(private route: ActivatedRoute,
              private userService: UserServiceClient,

  ) { }

  async ngOnInit(): Promise<void> {
    this.route.params.subscribe(params => {
        this.userID = params.userID;
      }
    );
    await this.getUserProfiles();
  }


  getUserProfiles = async () => {
      window.alert('findUserByID function reached wih userID : ' + this.userID);
      await this.userService.findUserById(this.userID)
        .then(userDoc => this.user = userDoc);
      window.alert(this.user);
  }



}
