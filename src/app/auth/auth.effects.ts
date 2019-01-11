import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import {AuthActionTypes, LoginAttempted, LoginFailed, LoginSuccessful, LogoutSuccessful} from './auth.actions';
import {AuthService} from './auth.service';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';

@Injectable()
export class AuthEffects {

  @Effect()
  loginAttempted$ = this.actions$.pipe(
    ofType(AuthActionTypes.LoginAttempted),
    switchMap((data: LoginAttempted) => this.authService
      .login(data.payload)
      .pipe(
        map((userTokenObj: any) => new LoginSuccessful(userTokenObj.token)),
        catchError(() => of(new LoginFailed()))
      ))
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService
  ) {}
}
