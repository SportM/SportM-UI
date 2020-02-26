import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AthletesRegattaComponent } from './athletes-regatta.component';

const routes: Routes = [{ path: '', component: AthletesRegattaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AthletesRegattaRoutingModule { }
