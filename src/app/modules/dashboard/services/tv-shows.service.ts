import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpReqService } from 'src/app/core/services/http-req.service';
import { environment } from 'src/environments/environment.prod';
import { RecordQuery } from '../../../core/models/record.interface';

@Injectable({
  providedIn: 'root',
})
export class TvShowsService {
  private BASE_URL: string = environment.BASE_URI_API;
  private API_KEY_PARAM: string = environment.API_KEY_PARAM;
  constructor(private _httpServ: HttpReqService) {}

  getTvShow(): Observable<RecordQuery> {
    return this._httpServ.get(
      `${this.BASE_URL}/tv/popular?${this.API_KEY_PARAM}`
    );
  }

  getShowById(showId: number) {
    return this._httpServ.get(
      `${this.BASE_URL}/tv/${showId}?${this.API_KEY_PARAM}`
    );
  }

  getSimilarTvShowById(showId: number) {
    return this._httpServ.get(
      `${this.BASE_URL}/tv/${showId}/similar?${this.API_KEY_PARAM}`
    );
  }
}
