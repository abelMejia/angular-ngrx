import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import {AuthActionTypes, LoginAttempted, LoginFailed, LoginSuccessful, LogoutSuccessful} from './auth.actions';
import {AuthService} from './auth.service';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {Router} from '@angular/router';

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

  @Effect({dispatch: false})
  loginSuccessful$ = this.actions$.pipe(
    ofType(AuthActionTypes.LoginSuccessful),
    switchMap(() => of(this.router.navigateByUrl('dashboard')))
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) {}
}
