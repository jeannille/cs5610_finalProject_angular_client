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
  };

  user = {
    _id: '',
    username: '',
    password: '',
    movies: '',
    firstName: '',
    lastName: '',
    email: '',
    editing: false
  };

  usernamesWhoAddedMovie = [];

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
        .then(movieDocument => this.movie = movieDocument);

      // fetch movie details from our own database
      this.movieServiceClient.getMovieMatchDetails(this.movieID)
        .then(doc => this.movieMatchDetails = doc);
      });

    // window.alert(this.movieMatchDetails.usersThatAddedMovie.length)
    //
    // // find user names of those listed on moviematchdetails
    // for (const userId of this.movieMatchDetails.usersThatAddedMovie) {
    //   this.findUserById(userId);
    // }
    }

    Add =  async () => {
      // check if user is logged in
      try {
        await this.userService.profile()
          .then(profile => this.user = profile);
        console.log(this.user._id);
      } catch (error) {
        window.alert('You must sign in to use this feature.');
      }
      // user is logged in -- continue to add move to details list
      this.updateMovieDetailsAddUser();
      this.updateUserMovieList();
    }

    // add current user to the list of users who recently added this movie
    updateMovieDetailsAddUser = () => {
       this.movieServiceClient.updateMovieDetailsAddUser(this.movieID, this.user._id)
        .then(doc => this.movieMatchDetails = doc);
    }

    findUserById  =  (userId) => {
      window.alert('findUserByID function reached wih userID : ' + userId);
      this.userService.findUserById(userId)
        .then(userDoc => this.usernamesWhoAddedMovie.push(userDoc.username));
    }


    // Update the user's MovieList
    updateUserMovieList = () => {
      window.alert('Search Details | UserID :' + this.user._id + this.user.username +
      ' | MovieID is : ' + this.movie.imdbID);
      this.userService.update(this.user._id, {movies: this.movie.imdbID})
        .then(actualUser => {
          if (actualUser !== undefined || null) {
            window.alert('Movie added to ' + this.user.username + ' MovieList');
          }
        });
    }

  }


