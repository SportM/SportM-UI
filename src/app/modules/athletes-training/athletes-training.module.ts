import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AthletesTrainingRoutingModule } from './athletes-training-routing.module';
import { AthletesTrainingComponent } from './athletes-training.component';


@NgModule({
  declarations: [AthletesTrainingComponent],
  imports: [
    CommonModule,
    AthletesTrainingRoutingModule
  ]
})
export class AthletesTrainingModule { }
