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
    username: 'bob',
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
  ]

  movieObjects = [];


  constructor( private userService: UserServiceClient,
               private curateService: CurateServiceClient,
               private omdbService: OMDBServiceClient,
               ) { }

   async ngOnInit(): Promise<void> {
    await this.isUserLoggedIn();
    await this.getCuratedLists();
    await this.convertMovieIdsToObjects();
  }

  // check if user is logged in
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
      // console.log('HOME| loggedIn : ' + this.loggedIn);
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
    //window.alert('MovieObjectsLength' + this.movieObjects.toString());
  }

  convertMovieIdsToObjects = async () => {
    // window.alert(this.curatedLists.length)
    for (const list of this.curatedLists) {
      // window.alert(JSON.stringify('list.movie : ' + list.movies));
      for (const movieId of list.movies) {
        window.alert(JSON.stringify(movieId));
        await this.getMovieObjects(movieId);
      }
      console.log('movieOBJECTs ' + JSON.stringify(this.movieObjects));
      }

    }
  }







