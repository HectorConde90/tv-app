import { ActionReducerMap } from '@ngrx/store';

import * as reducers from './reducers';

export interface AppState {
  tvShow: reducers.TvShowState;
  movieQuery: reducers.MovieQueryState;
  show: reducers.ShowState;
  movie: reducers.MovieState;
  similarTvShow: reducers.SimilarTvShowState;
  similarMovie: reducers.SimilarMovieState;
}

export const appReducers: ActionReducerMap<AppState> = {
  tvShow: reducers.tvShowReducer,
  movieQuery: reducers.movieQueryReducers,
  show: reducers.showReducer,
  movie: reducers.movieReducers,
  similarTvShow: reducers.similarTvShowReducer,
  similarMovie: reducers.similarMovieReducer,
};
