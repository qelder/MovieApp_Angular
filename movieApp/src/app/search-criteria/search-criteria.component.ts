import { query } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MovieService } from '../service/movie.service';

@Component({
  selector: 'app-search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.css'],
})
export class SearchCriteriaComponent implements OnInit {
  genre: any;

  data: any = [];
  watchlist: any = [];

  constructor(private service: MovieService, private router: Router) {}

  ngOnInit(): void {
    this.service.getGenres().subscribe((response: any) => {
      this.genre = response['genres'];
    });
  }

  submitForm(form: NgForm) {
    //routes to movie list component and takes the query params object with it
    this.router.navigate(['movie-list'], {
      queryParams: {
        title: form.value.title,
        year: form.value.year,
        genre: form.value.genre,
        rating: form.value.rating,
      },
    });
  }
}
