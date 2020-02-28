import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoachRoutingModule } from './coach-routing.module';
import { CoachComponent } from './coach.component';
import {CoachMenuComponent} from '../../components/coach-menu/coach-menu.component';
import {
  MatButtonModule, MatIconModule, MatListModule,
  MatMenuModule, MatSidenavModule, MatToolbarModule,
} from '@angular/material';
import {ShareMenuModule} from '../share-menu/share-menu.module';


@NgModule({
  declarations: [CoachComponent],
  imports: [
    CommonModule,
    CoachRoutingModule,
    ShareMenuModule
  ],
})
export class CoachModule { }
