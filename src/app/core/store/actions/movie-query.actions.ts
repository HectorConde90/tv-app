import { createAction, props } from '@ngrx/store';
import { RecordQuery } from '../../models';

export const getMoviesQuery = createAction('[Movies] Get');
export const getMoviesQuerySuccess = createAction(
  '[Movies] Get Success',
  props<{ movieQuery: RecordQuery }>()
);
export const getMoviesQueryError = createAction(
  '[Movies] Get Error',
  props<{ payload: any }>()
);
