import { createReducer, on } from '@ngrx/store';
import { RecordQuery } from '../../models';

import {
  getMoviesQuery,
  getMoviesQuerySuccess,
  getMoviesQueryError,
} from '../actions';

export interface MovieQueryState {
  movieQuery: RecordQuery;
  loaded: boolean;
  loading: boolean;
  error: any;
}

const initialMovieQuery: MovieQueryState = {
  movieQuery: {
    results: [],
    total_pages: 0,
    total_results: 0,
  },
  loaded: false,
  loading: false,
  error: null,
};

export const _movieQueryReducers = createReducer(
  initialMovieQuery,
  on(getMoviesQuery, (state) => ({ ...state, loading: true })),

  on(getMoviesQuerySuccess, (state, { movieQuery }) => ({
    ...state,
    loading: false,
    loaded: true,
    movieQuery,
  })),
  on(getMoviesQueryError, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: true,
    error: payload,
  }))
);

export function movieQueryReducers(state: any, action: any) {
  return _movieQueryReducers(state, action);
}
