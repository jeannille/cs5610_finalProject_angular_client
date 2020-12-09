import {Component, Input, OnInit} from '@angular/core';
import {UserServiceClient} from '../services/UserServiceClient';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router,
              private service: UserServiceClient
  ) {
    this.getSelectedRole();
  }

  username = '';
  password = '';
  verifyPassword = '';
  firstName = '';
  lastName = '';
  email = '';
  role = '';
  radioSelected: string;
  radioSelectedString: string;
  selectedRole: any;
  roles = ['Admin', 'Standard'];

  // @Input()
  // role = '';

  getSelectedRole() {
    this.selectedRole = this.roles.find(choice => choice === this.radioSelected);
    this.radioSelectedString = JSON.stringify(this.selectedRole);
  }

  register = (username, password, role, firstName, lastName, email) => {
    role = this.selectedRole;
    console.log(username, password, role, firstName, lastName, email);
    this.service.register(username, password, role, firstName, lastName, email)
      .then(actualUser => {
        console.log('USER REGISTERED:', actualUser);
        this.router.navigate(['/profile']);
      });
  };

  // onSubmit(f: NgForm) {
  //   // console.log(f.value);  // { first: '', last: '' }
  //   // console.log(f.valid);  // false
  //   console.log(this.selectedRole);
  //   this.role = this.selectedRole;
  //   console.log(f.value);  // false
  //   this.role = f.value;
  //   console.log(this.role);
  // }

  ngOnInit(): void {
  }

}
