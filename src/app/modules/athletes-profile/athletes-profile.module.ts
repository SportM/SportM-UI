import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AthletesProfileRoutingModule } from './athletes-profile-routing.module';
import { AthletesProfileComponent } from './athletes-profile.component';
import {ShareModule} from '../share/share.module';


@NgModule({
  declarations: [AthletesProfileComponent],
  imports: [
    CommonModule,
    AthletesProfileRoutingModule,
    ShareModule
  ]
})
export class AthletesProfileModule { }
