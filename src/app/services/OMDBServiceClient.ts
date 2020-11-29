import {Injectable} from '@angular/core';


@Injectable()
export class OMDBServiceClient {

   fetchMoviesBySearchText = (searchText) =>
    fetch(`http://www.omdbapi.com/?apikey=b01479c3&s=` + searchText)
      .then(response => response.json())

}
