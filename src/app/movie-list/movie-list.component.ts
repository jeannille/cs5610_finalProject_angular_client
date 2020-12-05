import {Component, OnInit} from '@angular/core';
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

  userId = '';


  constructor(private userservice: UserServiceClient,
              private omdbService: OMDBServiceClient,
              private route: ActivatedRoute,
  ) {
  }

  // async ngOnInit(): Promise<void> {
  //    await this.getUserProfile();
  // }
  //
  // findUserById = async () => {
  //   await this.userservice.findUserById(this.user._id)
  //     .then(actualUser => this.user2 = actualUser);
  // }
  //
  // getUserProfile = async () => {
  //   await this.userservice.profile()
  //     .then(profile => this.user = profile)
  //   await this.findUserById();
  //   for (const movieId of this.user2.movies) {
  //     console.log(movieId);
  //     this.fetchMovieByID(movieId);
  //   }
  // }
  //
  //   fetchMovieByID = async (movieID) => {
  //     await this.omdbService.fetchMovieByID(movieID)
  //       .then(movieDocument => this.movieObjectsList.push(movieDocument));
  //     console.log(this.movieObjectsList);
  //   }

  async ngOnInit(): Promise<void> {
    await this.route.params.subscribe(params => {
      this.userId = params.uid;
    });
    await this.findUserById();
    await this.fetchMovieByID();
  }

  findUserById = async () => {
    await this.userservice.findUserById(this.userId)
      .then(actualUser => this.user = actualUser);
  }

  fetchMovieByID = async () => {
    for (const movieId of this.user.movies) {
      await this.omdbService.fetchMovieByID(movieId)
        .then(movieDocument => this.movieObjectsList.push(movieDocument));
    }
    console.log(this.movieObjectsList);
  }


}
