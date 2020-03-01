import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule} from '@angular/material';
import {AthleteMenuComponent} from '../../components/athlete-menu/athlete-menu.component';
import {CoachMenuComponent} from '../../components/coach-menu/coach-menu.component';



@NgModule({
  declarations: [AthleteMenuComponent, CoachMenuComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule
  ],
  exports: [AthleteMenuComponent, CoachMenuComponent]
})
export class ShareMenuModule { }
