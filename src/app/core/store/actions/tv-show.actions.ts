import { createAction, props } from '@ngrx/store';
import { RecordQuery } from '../../models';

export const getTvShows = createAction('[TV Shows] Get');
export const getTvShowsSuccess = createAction(
  '[TV Shows] Get Success',
  props<{ tvShowQuery: RecordQuery }>()
);
export const getTvShowsError = createAction(
  '[TV Shows] Get Error',
  props<{ payload: any }>()
);
