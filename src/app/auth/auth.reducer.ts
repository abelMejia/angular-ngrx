import { Action } from '@ngrx/store';
import { AuthActions, AuthActionTypes } from './auth.actions';

export interface State {
    username: string;
    token: string;
}

export const initialState: State = {
    username: undefined,
    token: undefined
};

export function reducer(state = initialState, action: AuthActions): State {
  switch (action.type) {

    case AuthActionTypes.LoginAttempted:
      return {
        ...state,
        username: action.payload.username
      };

   case AuthActionTypes.LoginFailed:
     return {
       ...state,
       username: undefined
     };

   case AuthActionTypes.LoginSuccessful:
     return {
       ...state,
       token: action.payload
     };

   case AuthActionTypes.LogoutSuccessful:
       return {
         ...initialState
       };

    default:
      return state;
  }
}
