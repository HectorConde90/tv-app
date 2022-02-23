import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppState } from '../../../../core/store/app.reducers';
import { Store } from '@ngrx/store';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MoviesService } from '../../services/movies.service';
import { getMovie, getShow } from 'src/app/core/store/actions';
import { environment } from 'src/environments/environment';
import { getRateClass } from 'src/app/core/utils';
import { getSimilarTvShows } from '../../../../core/store/actions/tv-show-similar.actions';
import { Record } from 'src/app/core/models';
import { getSimilarMovie } from '../../../../core/store/actions/movie-similar.actions';

@Component({
  selector: 'app-record-detail',
  templateUrl: './record-detail.component.html',
  styleUrls: ['./record-detail.component.scss'],
})
export class RecordDetailComponent implements OnInit, OnDestroy {
  record!: Record;
  similarRecord: Record[] = [];
  type!: string;
  IMAGE_URI: string = environment.API_IMAGE;
  unsubscribe: Subscription[] = [];
  constructor(
    private _store: Store<AppState>,
    private _activateRoute: ActivatedRoute,
    private _router: Router,
    private _movieServ: MoviesService
  ) {}

  ngOnInit(): void {
    const subscription = this._activateRoute.params.subscribe((params) => {
      switch (params['type']) {
        case 'show':
          this.getShow(params['id']);
          break;
        case 'movie':
          this.getMovie(params['id']);
          break;
        default:
          this._router.navigate(['']);
      }
      this.type = params['type'];
    });
    this.unsubscribe.push(subscription);
  }

  ngOnDestroy(): void {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }

  getMovie(id: number) {
    this._store.dispatch(getMovie({ id }));
    this._store.dispatch(getSimilarMovie({ id }));
    const similarMovieSubscription = this._store
      .select('similarMovie')
      .subscribe(({ similarMovie }) => {
        this.similarRecord = similarMovie.results;
      });
    const subscription = this._store
      .select('movie')
      .subscribe(({ movie }) => (this.record = movie));
    this.unsubscribe.push(subscription, similarMovieSubscription);
  }
  getShow(id: number) {
    this._store.dispatch(getShow({ id }));
    this._store.dispatch(getSimilarTvShows({ id }));
    const similarShowSubscription = this._store
      .select('similarTvShow')
      .subscribe(({ similarTvShow }) => {
        this.similarRecord = similarTvShow.results;
      });
    const subscription = this._store
      .select('show')
      .subscribe(({ show }) => (this.record = show));
    this.unsubscribe.push(subscription, similarShowSubscription);
  }

  calculateRate(rate: number) {
    return getRateClass(rate);
  }
}
