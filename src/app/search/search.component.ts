import { Component, OnInit } from '@angular/core';
import {OMDBServiceClient} from '../services/OMDBServiceClient';
import {ActivatedRoute} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {error} from '@angular/compiler/src/util';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchText = '';
  moviesSearchResult = {
    Search: []
  };
  urlSearchText = '';



  constructor(private omdbService: OMDBServiceClient,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.urlSearchText = params.searchText;
      if (this.urlSearchText !== undefined) {
        this.fetchMoviesBySearchText(this.urlSearchText);
      }
    });
  }

  fetchMoviesBySearchText = (searchText) => {
    this.omdbService.fetchMoviesBySearchText(searchText)
      .then(results => this.moviesSearchResult = results);
  }
}
