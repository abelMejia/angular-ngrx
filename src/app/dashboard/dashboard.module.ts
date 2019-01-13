import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardComponent} from './dashboard.component';
import { StoreModule } from '@ngrx/store';
import * as fromDashboard from './dashboard.reducer';
import { EffectsModule } from '@ngrx/effects';
import { DashboardEffects } from './dashboard.effects';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('dashboard', fromDashboard.reducer),
    EffectsModule.forFeature([DashboardEffects])
  ]
})
export class DashboardModule { }
