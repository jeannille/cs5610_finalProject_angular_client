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
    _id: '',
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    editing: false,
    movies: [],
    password: '',
  };

  movieObjectsList = [];

  user2 = {
    _id: '',
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    editing: false,
    movies: [],
    password: '',
  };


  constructor(private userservice: UserServiceClient,
              private omdbService: OMDBServiceClient,
             ) { }

  // async ngOnInit(): Promise<void> {
  //   await this.userservice.profile()
  //     .then(profile => this.user = profile)
  //   for (const movieId of this.user.movies) {
  //     console.log(movieId);
  //     this.fetchMovieByID(movieId);
  //   }
  // }

  async ngOnInit(): Promise<void> {
    await this.getUserProfile();
  }

  findUserById = async () => {
    await this.userservice.findUserById(this.user._id)
      .then(actualUser => this.user2 = actualUser);
  }

  getUserProfile = async () => {
    await this.userservice.profile()
      .then(profile => this.user = profile)
    await this.findUserById();
    for (const movieId of this.user2.movies) {
      console.log(movieId);
      this.fetchMovieByID(movieId);
    }
  }

    fetchMovieByID = async (movieID) => {
      await this.omdbService.fetchMovieByID(movieID)
        .then(movieDocument => this.movieObjectsList.push(movieDocument));
      console.log(this.movieObjectsList);
    }

  }
