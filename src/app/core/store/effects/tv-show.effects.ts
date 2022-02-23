import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { getTvShows, getTvShowsSuccess } from '../actions';
import { mergeMap, map, tap } from 'rxjs/operators';
import { TvShowsService } from 'src/app/modules/dashboard/services/tv-shows.service';
import { RecordQuery } from '../../models';
@Injectable()
export class TvShowEffects {
  constructor(private _actions$: Actions, private _tvShow: TvShowsService) {}

  initTvShow$ = createEffect(() =>
    this._actions$.pipe(
      ofType(getTvShows),
      mergeMap(() =>
        this._tvShow
          .getTvShow()
          .pipe(
            map((tvShowQuery: RecordQuery) =>
              getTvShowsSuccess({ tvShowQuery })
            )
          )
      )
    )
  );
}
