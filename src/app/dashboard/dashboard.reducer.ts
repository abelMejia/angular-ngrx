import {DashboardActions, DashboardActionTypes} from './dashboard.actions';
import {AuthActionTypes} from '../auth/auth.actions';

export interface State {
 dashboardData: any;
}

export const initialState: State = {
  dashboardData: undefined
};

export function reducer(state = initialState, action: DashboardActions): State {
  switch (action.type) {

    case DashboardActionTypes.DashboardLoadEnd:
      return {
        ...state,
        dashboardData: action.payload.data
      };
    case AuthActionTypes.LogoutSuccessful:
      return {
        ...initialState
      };

    default:
      return state;
  }
}
