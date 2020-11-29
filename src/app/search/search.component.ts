import { Component, OnInit } from '@angular/core';
import {OMDBServiceClient} from '../services/OMDBServiceClient';

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

  constructor(private omdbService: OMDBServiceClient) { }

  ngOnInit(): void {
  }

  fetchMoviesBySearchText = (searchText) =>
    this.omdbService.fetchMoviesBySearchText(searchText)
      .then(results => this.moviesSearchResult = results)
}
