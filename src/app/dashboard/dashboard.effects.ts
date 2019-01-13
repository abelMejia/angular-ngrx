import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { DashboardActionTypes } from './dashboard.actions';

@Injectable()
export class DashboardEffects {

  @Effect()
  loadDashboards$ = this.actions$.pipe(ofType(DashboardActionTypes.LoadDashboards));

  constructor(private actions$: Actions) {}
}
