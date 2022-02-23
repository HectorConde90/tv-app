import { createAction, props } from '@ngrx/store';
import { Record } from '../../models/record.interface';

export const getMovie = createAction('[Movie] Get ', props<{ id: number }>());
export const getMovieSuccess = createAction(
  '[Movie] Get Success ',
  props<{ movie: Record }>()
);
