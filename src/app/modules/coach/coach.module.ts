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
import {ShareModule} from '../share/share.module';
import {SharePopUpModule} from '../share-pop-up/share-pop-up.module';


@NgModule({
  declarations: [CoachComponent],
  imports: [
    CommonModule,
    CoachRoutingModule,
    ShareMenuModule,
    SharePopUpModule
  ],
})
export class CoachModule { }
