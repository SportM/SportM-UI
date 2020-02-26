import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AthletesRoutingModule } from './athletes-routing.module';
import { AthletesComponent } from './athletes.component';
import {MatButtonModule, MatMenuModule} from '@angular/material';
import {AthleteMenuComponent} from '../../components/athlete-menu/athlete-menu.component';


@NgModule({
  declarations: [AthletesComponent, AthleteMenuComponent],
  imports: [
    CommonModule,
    AthletesRoutingModule,
    MatMenuModule,
    MatButtonModule,
  ]
})
export class AthletesModule { }
