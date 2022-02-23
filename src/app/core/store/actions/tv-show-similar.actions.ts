import { createAction, props } from '@ngrx/store';
import { RecordQuery } from '../../models';

export const getSimilarTvShows = createAction(
  '[Similar TV Shows] Get',
  props<{ id: number }>()
);
export const getSimilarTvShowsSuccess = createAction(
  '[Similar TV Shows] Get Success',
  props<{ similarTvShow: RecordQuery }>()
);
