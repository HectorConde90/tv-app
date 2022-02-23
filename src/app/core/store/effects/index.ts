import { MovieQueryEffects } from './movie-query.effects';
import { MovieEffects } from './movie.effetcs';
import { ShowEffects } from './show.effects';
import { TvShowEffects } from './tv-show.effects';
import { SimilarShowEffects } from './tv-show-similar.effects';
import { SimilarMovieffects } from './movie-similar.effects';

export const EffectsArray: any[] = [
  TvShowEffects,
  MovieQueryEffects,
  MovieEffects,
  ShowEffects,
  SimilarShowEffects,
  SimilarMovieffects,
];
