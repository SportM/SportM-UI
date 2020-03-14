import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AthletesComponent } from './athletes.component';

const routes: Routes = [
  { path: '',
    component: AthletesComponent,
    children: [
      {
        path: 'training',
        loadChildren: () => import('../athletes-training/athletes-training.module').then(m => m.AthletesTrainingModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../athletes-profile/athletes-profile.module').then(m => m.AthletesProfileModule)
      },
      // {
      //   path: 'regatta',
      //   loadChildren: () => import('../athletes-regatta/athletes-regatta.module').then(m => m.AthletesRegattaModule)
      // },
      {
        path: 'crew',
        loadChildren: () => import('../athletes-crew/athletes-crew.module').then(m => m.AthletesCrewModule)
      },
      {
        path: 'logout',
        // loadChildren: () => import('../athletes-planning/athletes-planning.module').then(m => m.CoachPlanningModule)
      },
      {path: '**', redirectTo: '/athletes/profile'},
    ]

  }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AthletesRoutingModule { }
