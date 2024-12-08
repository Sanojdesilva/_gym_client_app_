
import { Component, OnInit } from '@angular/core';
import { ClientService } from '../services/client.service';
import { Workout } from '../models/client.model';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-workout-plan',
  templateUrl: './workout-plan.page.html',
  styleUrls: ['./workout-plan.page.scss'],
})
export class WorkoutPlanPage implements OnInit {
  workoutPlan: Workout[] = [];

  constructor(
    private clientService: ClientService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    const user = this.authService.getUser();
    if (user) {
      this.clientService.getWorkoutPlan(user.client_id).subscribe(
        (response: Workout[]) => {
          this.workoutPlan = response;
        },
        (error) => {
          console.error('Error fetching workout plan', error);
        }
      );
    } else {
      console.error('No user is currently logged in.');
      this.router.navigate(['/login']);
    }
  }
}
