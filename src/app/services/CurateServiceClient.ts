import {Injectable} from '@angular/core';

// " credentials: 'include' " -- passes cookies to server
@Injectable()
export class CurateServiceClient {

  getCuratedLists = () =>
    fetch(`http://localhost:3000/curate/` , {
      method: 'GET',
      credentials: 'include'
    }).then(response => response.json())
      .catch(err => console.log(err))


}
