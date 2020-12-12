import {Injectable} from '@angular/core';


@Injectable()
export class MovieServiceClient {

  getMovieMatchDetails = (mId) =>
    fetch(`http://localhost:3000/details/` + mId, {
      method: 'POST',
      credentials: 'include'
    }).then(response => response.json())
      .catch(err => console.log(err))

  updateMovieDetailsAddUser = (mId, uId) =>
    fetch(`http://localhost:3000/details/` + mId + `/update`, {
      method: 'POST',
      body: JSON.stringify({uId}),
      headers: {
        'content-type': 'application/json'
      },
      credentials: 'include'
    }).then(response => response.json())
      .catch(err => console.log(err))

}
