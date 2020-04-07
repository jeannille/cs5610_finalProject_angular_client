import {Injectable} from '@angular/core';

@Injectable()
export class UserServiceClient {

  logout = () =>
    fetch(`http://localhost:3000/logout`, {
      method: 'POST',
      credentials: 'include'
    })

  profile = () =>
    fetch(`http://localhost:3000/profile`, {
      method: 'POST',
      credentials: 'include'
    }).then(response => response.json())

  login = (username, password) =>
    fetch(`http://localhost:3000/login`, {
      method: 'POST',
      body: JSON.stringify({username, password}),
      headers: {
        'content-type': 'application/json'
      },
      credentials: 'include'
    }).then(response => response.json())

  register = (username, password) =>
    fetch(`http://localhost:3000/register`, {
      method: 'POST',
      body: JSON.stringify({username, password}),
      headers: {
        'content-type': 'application/json'
      },
      credentials: 'include'
    }).then(response => response.json())
}
