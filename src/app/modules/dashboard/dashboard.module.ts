import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MovieComponent } from './components/movie/movie.component';
import { TvShowComponent } from './components/tv-show/tv-show.component';
import { DashboardComponent } from './dashboard.component';
import { RecordCardComponent } from './components/record-card/record-card.component';
import { RecordDetailComponent } from './components/record-detail/record-detail.component';

@NgModule({
  declarations: [
    NavBarComponent,
    MovieComponent,
    TvShowComponent,
    DashboardComponent,
    RecordCardComponent,
    RecordDetailComponent,
  ],
  imports: [CommonModule, DashboardRoutingModule, SharedModule],
})
export class DashboardModule {}
