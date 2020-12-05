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

  listOfUsersThatAddedMovie = [];

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
    }

    Add = async () => {
      // Make sure the user is logged in
      try {
        await this.userService.profile()
          .then(profile => this.user = profile);
        console.log(this.user._id);
      } catch (error) {
        window.alert('You must sign in to use this feature.');
      }
      this.updateMovieDetailsAddUser();


    }


    updateMovieDetailsAddUser = () => {
      // get list of Users that have already added this movie
      this.movieServiceClient.updateMovieDetailsAddUser(this.movieID, this.user._id)
          .then(doc => this.movieMatchDetails = doc);

      for (const userId of this.movieMatchDetails.usersThatAddedMovie) {
        this.listOfUsersThatAddedMovie.push('3');
        this.findUserById(this.user._id);
      }

      window.alert(this.listOfUsersThatAddedMovie);
    }

    findUserById  = async (userId) => {
      window.alert('findUserByID function reached');
      await this.userService.findUserById(userId)
        .then(userDoc => this.listOfUsersThatAddedMovie.push(userDoc));
      // window.alert('Search-Detail| find users by ID : ' + userId);
    }



    // TODO update the user's MovieList

  }


