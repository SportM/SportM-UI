import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AthletesProfileComponent } from './athletes-profile.component';

const routes: Routes = [{ path: '', component: AthletesProfileComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AthletesProfileRoutingModule { }
