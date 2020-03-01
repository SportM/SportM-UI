import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoachRoutingModule } from './coach-routing.module';
import { CoachComponent } from './coach.component';
import {ShareMenuModule} from '../share-menu/share-menu.module';
import {CoachMenuComponent} from '../../components/coach-menu/coach-menu.component';


@NgModule({
  declarations: [CoachComponent, CoachMenuComponent],
  imports: [
    CommonModule,
    CoachRoutingModule,
    ShareMenuModule,
  ],
})
export class CoachModule { }
