import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AthletesProfileRoutingModule } from './athletes-profile-routing.module';
import { AthletesProfileComponent } from './athletes-profile.component';
import {ShareModule} from '../share/share.module';
import {AthleteTrainingService} from '../../services/athlete-training.service';


@NgModule({
  declarations: [AthletesProfileComponent],
  imports: [
    CommonModule,
    AthletesProfileRoutingModule,
    ShareModule
  ],
  providers:[AthleteTrainingService]
})
export class AthletesProfileModule { }
