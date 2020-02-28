import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  {
    path: 'coach',
    loadChildren: () => import('./modules/coach/coach.module').then(m => m.CoachModule),
  },
  {
    path: 'athletes',
    loadChildren: () => import('./modules/athletes/athletes.module').then(m => m.AthletesModule),
  },
  { path: '', component: AuthComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
