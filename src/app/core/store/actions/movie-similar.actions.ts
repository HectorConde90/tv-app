import { createAction, props } from '@ngrx/store';
import { RecordQuery } from '../../models';

export const getSimilarMovie = createAction(
  '[Similar Movie ] Get',
  props<{ id: number }>()
);
export const getSimilarMovieSuccess = createAction(
  '[Similar Movie] Get Success',
  props<{ similarMovie: RecordQuery }>()
);
