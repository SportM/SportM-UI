import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AthletesRegattaRoutingModule } from './athletes-regatta-routing.module';
import { AthletesRegattaComponent } from './athletes-regatta.component';


@NgModule({
  declarations: [AthletesRegattaComponent],
  imports: [
    CommonModule,
    AthletesRegattaRoutingModule
  ]
})
export class AthletesRegattaModule { }
