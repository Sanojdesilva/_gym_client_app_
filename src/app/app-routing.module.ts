import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomePageModule } from './home/home.module';
import { LoginPageModule } from './login/login.module';
import { ClientDetailsPageModule } from './client-details/client-details.module';
import { WorkoutPlanPageModule } from './workout-plan/workout-plan.module';
import { PrivacyPageModule } from './privacy/privacy.module';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, //defualt ruote
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule) },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },
  { path: 'client-details', loadChildren: () => import('./client-details/client-details.module').then(m => m.ClientDetailsPageModule) },
  { path: 'workout-plan', loadChildren: () => import('./workout-plan/workout-plan.module').then(m => m.WorkoutPlanPageModule) },
  { path: 'privacy', loadChildren: () => import('./privacy/privacy.module').then(m => m.PrivacyPageModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

