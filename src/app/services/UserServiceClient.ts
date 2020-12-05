import {Injectable} from '@angular/core';

// " credentials: 'include' " -- passes cookies to server

@Injectable()
export class UserServiceClient {

  findUserById = (userId) =>
    fetch(`http://localhost:3000/findUserById/` + userId, {
      method: 'POST',
      body: JSON.stringify({userId}),
      headers: {
        'content-type': 'application/json'
      },
      credentials: 'include'
    }).then(response => response.json())
      .catch(err => console.log(err))

  logout = () =>
    fetch(`http://localhost:3000/logout`, {
      method: 'POST',
      credentials: 'include'
    }).catch(err => console.log(err))


  profile = async () =>
    await fetch(`http://localhost:3000/profile`, {
      method: 'POST',
      credentials: 'include'
    }).then(response => response.json())
      .catch(err => console.log(err))


  login = (username, password) =>
    fetch(`http://localhost:3000/login`, {
      method: 'POST',
      body: JSON.stringify({username, password}),
      headers: {
        'content-type': 'application/json'
      },
      credentials: 'include'
    }).then(response => response.json())
      .catch(err => console.log(err))


  register = (username, password) =>
    fetch(`http://localhost:3000/register`, {
      method: 'POST',
      body: JSON.stringify({username, password}),
      headers: {
        'content-type': 'application/json'
      },
      credentials: 'include'
    }).then(response => response.json())
      .catch(err => console.log(err))

}
