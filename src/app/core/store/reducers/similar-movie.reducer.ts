import { createReducer, on } from '@ngrx/store';
import { RecordQuery } from '../../models';
import {
  getShow,
  getShowSuccess,
  getSimilarMovie,
  getSimilarMovieSuccess,
  getSimilarTvShows,
  getSimilarTvShowsSuccess,
} from '../actions';

export interface SimilarMovieState {
  id: number;
  similarMovie: RecordQuery;
  loaded: boolean;
  loading: boolean;
  error: any;
}

const initialSimilarMovie: SimilarMovieState = {
  id: 0,
  similarMovie: {
    results: [],
    total_pages: 0,
    total_results: 0,
  },
  loaded: false,
  loading: false,
  error: null,
};

export const _similatMovieReducer = createReducer(
  initialSimilarMovie,
  on(getSimilarMovie, (state, { id }) => ({ ...state, loading: true, id })),

  on(getSimilarMovieSuccess, (state, { similarMovie }) => ({
    ...state,
    loading: false,
    loaded: true,
    similarMovie,
  }))
);

export function similarMovieReducer(state: any, action: any) {
  return _similatMovieReducer(state, action);
}
