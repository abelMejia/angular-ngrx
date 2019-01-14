import {PayloadAction} from '../app.model';
import {LogoutSuccessful} from '../auth/auth.actions';

export enum DashboardActionTypes {
  DashboardLoadStart = '[Dashboard] Dashboard load started',
  DashboardLoadEnd = '[Dashboard] Dashboard load finished'
}

export class DashboardLoadStart extends PayloadAction {
  readonly type = DashboardActionTypes.DashboardLoadStart;
}

export class DashboardLoadEnd extends PayloadAction {
  readonly type = DashboardActionTypes.DashboardLoadEnd;
}

export type DashboardActions = DashboardLoadStart | DashboardLoadEnd | LogoutSuccessful;
