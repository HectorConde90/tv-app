import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, tap } from 'rxjs/operators';
import { Record } from '../../models';
import { getShow, getShowSuccess } from '../actions';
import { TvShowsService } from 'src/app/modules/dashboard/services/tv-shows.service';
@Injectable()
export class ShowEffects {
  constructor(private _actions$: Actions, private _showServ: TvShowsService) {}

  initShow$ = createEffect(() =>
    this._actions$.pipe(
      ofType(getShow),
      mergeMap((action) =>
        this._showServ
          .getShowById(action.id)
          .pipe(map((show: Record) => getShowSuccess({ show })))
      )
    )
  );
}
