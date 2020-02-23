import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoachPlanningComponent } from './modules/coach-planning/coach-planning.component';
import { CoachExerciceComponent } from './modules/coach-exercice/coach-exercice.component';
import { AuthComponent } from './components/auth/auth.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  {
    path: 'coach',
    loadChildren: () => import('./modules/coach/coach.module').then(m => m.CoachModule),
  },
  { path: 'coach-categorie', loadChildren: () => import('./modules/coach-type-exercice/coach-type-exercice.module').then(m => m.CoachTypeExerciceModule) },
  { path: '', component: AuthComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
