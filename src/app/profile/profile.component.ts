import {Component, OnInit} from '@angular/core';
import {UserServiceClient} from '../services/UserServiceClient';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  users = [];

  user = {
    _id: '',
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
    role: '',
    editing: false
  };

  checkLoggedIn: {};

  constructor(private router: Router,
              private service: UserServiceClient) {
  }

  ngOnInit(): void {
    // this.checkLoggedIn = sessionStorage.getItem('username');
    // console.log('checkloggedIn' + this.checkLoggedIn)
    // if (this.checkLoggedIn !== null) {
    this.service.profile()
      .then(profile => this.user = profile);
    // }
    this.service.findAllUsers()
      .then(users => this.users = users);
  }

  logout = () =>
    this.service.logout()
      .then(status => this.router.navigate(['/']));

  editUser = (topic) =>
    topic.editing = true;

  saveUser = (topic) => {
    topic.editing = false;
    // this.topicService.updateTopic(topic);
    // .then(status => this.modules = this.modules.map(m => m._id === module._id ? module : m))
  }

  userDefined = () => {
    if (typeof this.user === undefined) {
      return 1;
    } else {
      return 0;
    }
  }

  register = () => {
    this.router.navigate(['/profile']);
  };

  // forceLogin = () => {
  //   if (this.user.password === '') {
  //     console.log('must log in!');
  //     alert('not logged in, navigating to Register page');
  //     //go to login page
  //     this.router.navigate(['/register']);
  //   }
  // };


}
