import { createReducer, on } from '@ngrx/store';
import { Record } from '../../models';

import { getMovie, getMovieSuccess } from '../actions';

export interface MovieState {
  id: number;
  movie: Record;
  loaded: boolean;
  loading: boolean;
  error: any;
}

const initialMovie: MovieState = {
  id: 0,
  movie: <Record>{},
  loaded: false,
  loading: false,
  error: null,
};

export const _movieReducers = createReducer(
  initialMovie,
  on(getMovie, (state, { id }) => ({ ...state, loading: true, id })),

  on(getMovieSuccess, (state, { movie }) => ({
    ...state,
    loading: false,
    loaded: true,
    movie,
  }))
);

export function movieReducers(state: any, action: any) {
  return _movieReducers(state, action);
}
