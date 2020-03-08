import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CoachPlanningComponent} from './coach-planning.component';
import {CoachPlanningRoutingModule} from './coach-planning-routing.module';
import {CalendarTModule} from '../calendar/calendar.module';
import {SharePopUpModule} from '../share-pop-up/share-pop-up.module';

@NgModule({
  declarations: [CoachPlanningComponent],
  imports: [
    CommonModule,
    CoachPlanningRoutingModule,
    CalendarTModule,
    SharePopUpModule,
  ],
})
export class CoachPlanningModule { }
