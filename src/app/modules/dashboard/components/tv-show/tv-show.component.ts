import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppState } from 'src/app/core/store/app.reducers';
import { Store } from '@ngrx/store';
import { getTvShows } from '../../../../core/store/actions/tv-show.actions';
import { Subscription } from 'rxjs';
import { Record } from '../../../../core/models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tv-show',
  templateUrl: './tv-show.component.html',
  styleUrls: ['./tv-show.component.scss'],
})
export class TvShowComponent implements OnInit, OnDestroy {
  tvShow: Record[] = [];
  unsubscribe: Subscription[] = [];
  constructor(private _store: Store<AppState>, private _router: Router) {}

  ngOnInit(): void {
    this.getTvShows();
  }

  getTvShows() {
    this._store.dispatch(getTvShows());
    const tvShowSubscription = this._store
      .select('tvShow')
      .subscribe((response) => {
        this.tvShow = response.tvShowQuery.results;
      });
    this.unsubscribe.push(tvShowSubscription);
  }

  getShowDetails(showId: number) {
    this._router.navigate(['/show', showId]);
  }

  ngOnDestroy(): void {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }
}
