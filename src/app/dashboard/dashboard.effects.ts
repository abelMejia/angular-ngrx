import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import {DashboardActionTypes, DashboardLoadEnd} from './dashboard.actions';
import {map, switchMap} from 'rxjs/operators';
import {DashboardService} from './dashboard.service';

@Injectable()
export class DashboardEffects {

  @Effect()
  dashboardLoadStart$ = this.actions$.pipe(
    ofType(DashboardActionTypes.DashboardLoadStart),
    switchMap(() => this.dashboardService.loadDashboard$().pipe(
      map(data => new DashboardLoadEnd(data))
    ))
  );

  constructor(private actions$: Actions,
              private dashboardService: DashboardService) {}
}
