import {Injectable} from '@angular/core';

@Injectable()
export class CurateServiceClient {

  getCuratedLists = () =>
    fetch(`http://localhost:3000/curate/` , {
      method: 'GET',
      credentials: 'include'
    }).then(response => response.json())
      .catch(err => console.log(err))

  deleteFromCuratedList  = ( docID ) =>
    fetch(`http://localhost:3000/curate/delete/` + docID  , {
      method: 'DELETE',
      credentials: 'include'
    }).then(response => response.json())
      .catch(err => console.log(err))

  addToCuratedList  = (movieID, movieObject ) =>
    fetch(`http://localhost:3000/curate/create/`   , {
      method: 'POST',
      body: JSON.stringify({movieID, movieObject}),
      headers: {
        'content-type': 'application/json'
      },
      credentials: 'include'
    }).then(response => response.json())
      .catch(err => console.log(err))

}
