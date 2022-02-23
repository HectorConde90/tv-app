import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, tap } from 'rxjs/operators';
import { RecordQuery } from '../../models';
import { MoviesService } from 'src/app/modules/dashboard/services/movies.service';
import { getMovie, getMoviesQuery, getMoviesQuerySuccess } from '../actions';
@Injectable()
export class MovieQueryEffects {
  constructor(private _actions$: Actions, private _movie: MoviesService) {}

  initMovie$ = createEffect(() =>
    this._actions$.pipe(
      ofType(getMoviesQuery),
      mergeMap(() =>
        this._movie
          .getMovies()
          .pipe(
            map((movieQuery: RecordQuery) =>
              getMoviesQuerySuccess({ movieQuery })
            )
          )
      )
    )
  );
}
