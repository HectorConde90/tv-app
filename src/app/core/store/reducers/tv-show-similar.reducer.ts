import { createReducer, on } from '@ngrx/store';
import { RecordQuery } from '../../models';
import {
  getShow,
  getShowSuccess,
  getSimilarTvShows,
  getSimilarTvShowsSuccess,
} from '../actions';

export interface SimilarTvShowState {
  id: number;
  similarTvShow: RecordQuery;
  loaded: boolean;
  loading: boolean;
  error: any;
}

const initialSimilarTvShow: SimilarTvShowState = {
  id: 0,
  similarTvShow: {
    results: [],
    total_pages: 0,
    total_results: 0,
  },
  loaded: false,
  loading: false,
  error: null,
};

export const _similatTvShowReducer = createReducer(
  initialSimilarTvShow,
  on(getSimilarTvShows, (state, { id }) => ({ ...state, loading: true, id })),

  on(getSimilarTvShowsSuccess, (state, { similarTvShow }) => ({
    ...state,
    loading: false,
    loaded: true,
    similarTvShow,
  }))
);

export function similarTvShowReducer(state: any, action: any) {
  return _similatTvShowReducer(state, action);
}
