import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AthletesProfileRoutingModule } from './athletes-profile-routing.module';
import { AthletesProfileComponent } from './athletes-profile.component';


@NgModule({
  declarations: [AthletesProfileComponent],
  imports: [
    CommonModule,
    AthletesProfileRoutingModule
  ]
})
export class AthletesProfileModule { }
