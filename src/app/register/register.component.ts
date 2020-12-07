import {Component, Input, OnInit} from '@angular/core';
import {UserServiceClient} from '../services/UserServiceClient';
import {Router} from '@angular/router';

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
  radioSelected: string;
  radioSelectedString: string;
  selectedRole: any;
  options = ['Admin', 'Standard'];

  @Input()
  role = '';

  getSelectedRole() {
    this.selectedRole = this.options.find(choice => choice === this.radioSelected);
    this.radioSelectedString = JSON.stringify(this.selectedRole);
  }

  onItemChange(item) {
    this.getSelectedRole();
  }

  register = (username, password, role, firstName, lastName, email) => {
    console.log(username, password, role, firstName, lastName, email);
    this.service.register(username, password, role, firstName, lastName, email)
      .then(actualUser => {
        console.log('USER REGISTERED:', actualUser);
        this.router.navigate(['/profile']);
      });
  }

  ngOnInit(): void {
  }

}
