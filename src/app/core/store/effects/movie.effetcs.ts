import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, tap } from 'rxjs/operators';
import { Record } from '../../models';
import { MoviesService } from 'src/app/modules/dashboard/services/movies.service';
import { getMovie, getMovieSuccess } from '../actions';
@Injectable()
export class MovieEffects {
  constructor(private _actions$: Actions, private _movie: MoviesService) {}

  initMovie$ = createEffect(() =>
    this._actions$.pipe(
      ofType(getMovie),
      mergeMap((action) =>
        this._movie
          .getMovieById(action.id)
          .pipe(map((movie: Record) => getMovieSuccess({ movie })))
      )
    )
  );
}
