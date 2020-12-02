import {Injectable} from '@angular/core';

// " credentials: 'include' " -- passes cookies to server

@Injectable()
export class MovieServiceClient {

  getMovieMatchDetails = (mId) =>
    fetch(`http://localhost:3000/details/` + mId, {
      method: 'POST',
      credentials: 'include'
    }).then(response => response.json())
      .catch(err => console.log(err))


}
