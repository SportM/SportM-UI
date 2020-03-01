import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AthletesRoutingModule } from './athletes-routing.module';
import { AthletesComponent } from './athletes.component';
import {ShareMenuModule} from '../share-menu/share-menu.module';


@NgModule({
  declarations: [AthletesComponent],
  imports: [
    CommonModule,
    AthletesRoutingModule,
    ShareMenuModule
  ]
})
export class AthletesModule { }
