import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { TvShowComponent } from './components/tv-show/tv-show.component';
import { MovieComponent } from './components/movie/movie.component';
import { RecordDetailComponent } from './components/record-detail/record-detail.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        redirectTo: 'tv-shows',
        pathMatch: 'full',
      },
      {
        path: 'tv-shows',
        component: TvShowComponent,
      },
      {
        path: 'movies',
        component: MovieComponent,
      },
      {
        path: ':type/:id',
        component: RecordDetailComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
