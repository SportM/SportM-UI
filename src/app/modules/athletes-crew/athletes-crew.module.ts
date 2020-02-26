import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AthletesCrewRoutingModule } from './athletes-crew-routing.module';
import { AthletesCrewComponent } from './athletes-crew.component';


@NgModule({
  declarations: [AthletesCrewComponent],
  imports: [
    CommonModule,
    AthletesCrewRoutingModule
  ]
})
export class AthletesCrewModule { }
