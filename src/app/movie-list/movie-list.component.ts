import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from '../services/UserServiceClient';
import {OMDBServiceClient} from '../services/OMDBServiceClient';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  user = {
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    editing: false,
    movies: [],
    password: '',
  };

  movieObjectsList = [];

  // movieID = '';
  // movie = {
  //   Title: '',
  //   Year: '',
  //   Rated: '',
  //   Released: '',
  //   Runtime: '',
  //   Genre: '',
  //   Director: '',
  //   Writer: '',
  //   Actors: '',
  //   Plot: '',
  //   Language: '',
  //   Country: '',
  //   Awards: '',
  //   Poster: '',
  //   Ratings: [
  //     {
  //       Source: '',
  //       Value: '',
  //     },
  //     {
  //       Source: '',
  //       Value: '',
  //     },
  //     {
  //       Source: '',
  //       Value: '',
  //     }
  //   ],
  //   Metascore: '',
  //   imdbRating: '',
  //   imdbVotes: '',
  //   imdbID: '',
  //   Type: '',
  //   DVD: '',
  //   BoxOffice: '',
  //   Production: '',
  //   Website: '',
  //   Response: '',
  // };



  constructor(private service: UserServiceClient,
              private omdbService: OMDBServiceClient,
             ) { }

  async ngOnInit(): Promise<void> {
    await this.service.profile()
      .then(profile => this.user = profile)
    for (const movieId of this.user.movies) {
      console.log(movieId);
      this.fetchMovieByID(movieId);
    }
  }

  fetchMovieByID = (movieID) => {
    this.omdbService.fetchMovieByID(movieID)
      .then(movieDocument => this.movieObjectsList.push(movieDocument));
    console.log(this.movieObjectsList);
  }

}
