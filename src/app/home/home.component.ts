import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from '../services/UserServiceClient';
import {CurateServiceClient} from '../services/CurateServiceClient';
import {OMDBServiceClient} from '../services/OMDBServiceClient';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  loggedIn = false;

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

  curatedLists = [
    {
      movies: [],
      title: '',
      description: '',
    }
  ];

  movieObjects = [];

  mostRecentMovie = {
    Title: ''
  };


  constructor( private userService: UserServiceClient,
               private curateService: CurateServiceClient,
               private omdbService: OMDBServiceClient,
               ) { }

   // CuratedLists are movieIDs which need
   // to be converted to Objects
   async ngOnInit(): Promise<void> {
    await this.isUserLoggedIn();
    await this.getCuratedLists();
    await this.convertMovieIdsToObjects();
    await this.getMostRecentMovie();
  }

  isUserLoggedIn =  async () => {
    // use session to find if user is logged in
    try {
      await this.userService.profile()
        .then(profile => this.user = profile);
      console.log(this.user._id);
    } catch (error) {
      window.alert(error);
    }
    // get local flag 'loggedIn'
    try {
      if (this.user._id !== undefined) {
        this.loggedIn = true;
        window.alert('HOME| loggedIn : ' + this.loggedIn);
      }
    } catch (error) {
      console.log('error');
    }
  }

  getCuratedLists = async () => {
    await this.curateService.getCuratedLists()
      .then(results => this.curatedLists = results);
  }

  getMovieObjects = async (movieId)  => {
    await  this.omdbService.fetchMovieByID(movieId)
      .then(movieObject => this.movieObjects.push(movieObject));
  }

  convertMovieIdsToObjects = async () => {
    for (const list of this.curatedLists) {
      for (const movieId of list.movies) {
        await this.getMovieObjects(movieId);
      }
    }
    // window.alert(JSON.stringify( this.movieObjects[0]));
  }

  getMostRecentMovie = async () => {
    const movieId = this.user.movies[this.user.movies.length - 1];
    await this.omdbService.fetchMovieByID(movieId)
      .then(movieObject => this.mostRecentMovie = movieObject);
  }

}







