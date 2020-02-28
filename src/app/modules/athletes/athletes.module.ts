import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AthletesRoutingModule } from './athletes-routing.module';
import { AthletesComponent } from './athletes.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {AthleteMenuComponent} from '../../components/athlete-menu/athlete-menu.component';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {ShareModule} from '../share/share.module';
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
