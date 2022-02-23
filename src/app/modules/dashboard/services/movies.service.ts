import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RecordQuery } from 'src/app/core/models';
import { HttpReqService } from 'src/app/core/services/http-req.service';
import { environment } from '../../../../environments/environment';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/core/store/app.reducers';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private BASE_URL: string = environment.BASE_URI_API;
  private API_KEY_PARAM: string = environment.API_KEY_PARAM;
  constructor(private _httpServ: HttpReqService) {}

  getMovies(): Observable<RecordQuery> {
    return this._httpServ.get(
      `${this.BASE_URL}/movie/popular?${this.API_KEY_PARAM}`
    );
  }

  getMovieById(movieId: number) {
    return this._httpServ.get(
      `${this.BASE_URL}/movie/${movieId}?${this.API_KEY_PARAM}`
    );
  }
  getSimilarMovieById(movieId: number) {
    return this._httpServ.get(
      `${this.BASE_URL}/movie/${movieId}/similar?${this.API_KEY_PARAM}`
    );
  }
}
