import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {FormControl} from '@angular/forms';
import {State} from '../reducers';
import {LoginAttempted} from '../auth/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = new FormControl('ThatGuy');
  password = new FormControl('');
  constructor(
    private store: Store<State>
  ) {
  }

  ngOnInit() {
     console.log('store', this.store);
  }

  onSubmit() {
      this.store.dispatch(new LoginAttempted({email: this.username.value, password: this.password.value}));
      
  }

}
