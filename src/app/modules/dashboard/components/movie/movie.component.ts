import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Record } from 'src/app/core/models';
import { AppState } from 'src/app/core/store/app.reducers';
import { getMoviesQuery } from '../../../../core/store/actions/movie-query.actions';
import { Subscription } from 'rxjs';
import { getMovie } from '../../../../core/store/actions/movie.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit, OnDestroy {
  movies: Record[] = [];
  unsubscribe: Subscription[] = [];

  constructor(private _store: Store<AppState>, private _router: Router) {}

  ngOnInit(): void {
    this.getMovies();
  }
  ngOnDestroy(): void {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }
  getMovies() {
    this._store.dispatch(getMoviesQuery());
    const subscription = this._store
      .select('movieQuery')
      .subscribe((response) => {
        this.movies = response.movieQuery.results;
      });
    this.unsubscribe.push(subscription);
  }

  getMovieDetails(movieId: number) {
    this._router.navigate(['/movie', movieId]);
  }
}
