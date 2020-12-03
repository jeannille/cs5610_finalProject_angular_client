import { Component, OnInit } from '@angular/core';
import {OMDBServiceClient} from '../services/OMDBServiceClient';
import {ActivatedRoute} from '@angular/router';
import {MovieServiceClient} from '../services/MovieServiceClient';
import {UserServiceClient} from '../services/UserServiceClient';

@Component({
  selector: 'app-search-details',
  templateUrl: './search-details.component.html',
  styleUrls: ['./search-details.component.css']
})
export class SearchDetailsComponent implements OnInit {
  movieID = '';
  movie = {
    Title: '',
    Year: '',
    Rated: '',
    Released: '',
    Runtime: '',
    Genre: '',
    Director: '',
    Writer: '',
    Actors: '',
    Plot: '',
    Language: '',
    Country: '',
    Awards: '',
    Poster: '',
    Ratings: [
      {
        Source: '',
        Value: '',
      },
      {
        Source: '',
        Value: '',
      },
      {
        Source: '',
        Value: '',
      }
    ],
    Metascore: '',
    imdbRating: '',
    imdbVotes: '',
    imdbID: '',
    Type: '',
    DVD: '',
    BoxOffice: '',
    Production: '',
    Website: '',
    Response: '',
  };
  movieMatchDetails = {
    movieId: '',
    usersThatAddedMovie: [],
    numTimesAdded: 0,
    _id: '',
  }

  user = {
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    editing: false
  };

  isLoggedIn = '';

  constructor(private omdbService: OMDBServiceClient,
              private movieServiceClient: MovieServiceClient,
              private userService: UserServiceClient,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      // fetch movie details from OMDB
      this.movieID = params.movieID;
      this.omdbService.fetchMovieByID(this.movieID)
        .then(movieDocument => this.movie = movieDocument)
      // fetch movie details from our own database
      this.movieServiceClient.getMovieMatchDetails(this.movieID)
        // .then(doc => console.log('SearchDetails |Details Document: ' + JSON.stringify(doc)))
        .then(doc => this.movieMatchDetails = doc)
    });
    }

    Add = async () => {
      try {
        await this.userService.profile()
          .then(profile => this.user = profile);
        console.log(this.user.username);
      } catch (error) {
        // console.error('Here is the error message', error);
        window.alert('You must sign in to use this feature.');
      }
    }
    // TODO update movie's list of usersThatAddedMovie
    // TODO update the user's MovieList

  }


