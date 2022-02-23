import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map } from 'rxjs/operators';
import { RecordQuery } from '../../models';
import { getSimilarTvShows, getSimilarTvShowsSuccess } from '../actions';
import { TvShowsService } from 'src/app/modules/dashboard/services/tv-shows.service';
@Injectable()
export class SimilarShowEffects {
  constructor(private _actions$: Actions, private _showServ: TvShowsService) {}

  initSimilarTvShow$ = createEffect(() =>
    this._actions$.pipe(
      ofType(getSimilarTvShows),
      mergeMap((action) =>
        this._showServ
          .getSimilarTvShowById(action.id)
          .pipe(
            map((similarTvShow: RecordQuery) =>
              getSimilarTvShowsSuccess({ similarTvShow })
            )
          )
      )
    )
  );
}
