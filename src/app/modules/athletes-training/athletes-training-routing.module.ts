import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AthletesTrainingComponent } from './athletes-training.component';

const routes: Routes = [{ path: '', component: AthletesTrainingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AthletesTrainingRoutingModule { }
