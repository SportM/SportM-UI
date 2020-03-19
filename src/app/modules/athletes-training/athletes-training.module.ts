import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AthletesTrainingRoutingModule } from './athletes-training-routing.module';
import { AthletesTrainingComponent } from './athletes-training.component';
import {ShareModule} from '../share/share.module';
import {MatRadioModule} from '@angular/material/radio';


@NgModule({
  declarations: [AthletesTrainingComponent],
  imports: [
    CommonModule,
    AthletesTrainingRoutingModule,
    ShareModule,
    MatRadioModule,
  ]
})
export class AthletesTrainingModule { }
