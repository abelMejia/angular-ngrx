import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {FormControl} from '@angular/forms';
import {State} from '../reducers';
import {Router} from '@angular/router';
import {LoginAttempted} from '../auth/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = new FormControl('ThatGuy');
  password = new FormControl('');
  constructor(private store: Store<State>) { }

  ngOnInit() {
  }

  onSubmit() {
    this.store.dispatch(new LoginAttempted({username: this.username.value, password: this.password.value}));
  }
}
