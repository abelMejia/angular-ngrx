import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {DashboardLoadStart} from './dashboard.actions';
import {pluck} from 'rxjs/operators';
import {State} from '../reducers';
import {Observable} from 'rxjs';
import {LogoutRequested} from '../auth/auth.actions';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  username$: Observable<string>;
  dashboardData$: Observable<any>;
  constructor(private store: Store<State>) {
    this.username$ = this.store.pipe(pluck('auth', 'username'));
    this.dashboardData$ = this.store.pipe(pluck('dashboard', 'dashboardData'));
  }

  ngOnInit() {
    this.store.dispatch(new DashboardLoadStart());
  }
  logout() {
    this.store.dispatch(new LogoutRequested());
  }
}
