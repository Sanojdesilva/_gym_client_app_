import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WorkoutPlanPageRoutingModule } from './workout-plan-routing.module';

import { WorkoutPlanPage } from './workout-plan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WorkoutPlanPageRoutingModule
  ],
  declarations: [WorkoutPlanPage]
})
export class WorkoutPlanPageModule {}
