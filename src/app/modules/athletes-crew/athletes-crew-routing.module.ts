import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AthletesCrewComponent } from './athletes-crew.component';

const routes: Routes = [{ path: '', component: AthletesCrewComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AthletesCrewRoutingModule { }
