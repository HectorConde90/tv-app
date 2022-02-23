import { createReducer, on } from '@ngrx/store';

import { RecordQuery } from '../../models';
import { getTvShows, getTvShowsError, getTvShowsSuccess } from '../actions';

export interface TvShowState {
  tvShowQuery: RecordQuery;
  loaded: boolean;
  loading: boolean;
  error: any;
}

const initialTvShows: TvShowState = {
  tvShowQuery: {
    results: [],
    total_pages: 0,
    total_results: 0,
  },
  loaded: false,
  loading: false,
  error: null,
};

export const _tvShowReducer = createReducer(
  initialTvShows,
  on(getTvShows, (state) => ({ ...state, loading: true })),

  on(getTvShowsSuccess, (state, { tvShowQuery }) => ({
    ...state,
    loading: false,
    loaded: true,
    tvShowQuery,
  })),
  on(getTvShowsError, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: true,
    error: payload,
  }))
);

export function tvShowReducer(state: any, action: any) {
  return _tvShowReducer(state, action);
}
