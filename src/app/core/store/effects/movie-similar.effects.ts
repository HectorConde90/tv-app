import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map } from 'rxjs/operators';
import { RecordQuery } from '../../models';
import { getSimilarMovie, getSimilarMovieSuccess } from '../actions';
import { MoviesService } from 'src/app/modules/dashboard/services/movies.service';
@Injectable()
export class SimilarMovieffects {
  constructor(private _actions$: Actions, private _movieServ: MoviesService) {}

  initSimilarMovie$ = createEffect(() =>
    this._actions$.pipe(
      ofType(getSimilarMovie),
      mergeMap((action) =>
        this._movieServ
          .getSimilarMovieById(action.id)
          .pipe(
            map((similarMovie: RecordQuery) =>
              getSimilarMovieSuccess({ similarMovie })
            )
          )
      )
    )
  );
}
