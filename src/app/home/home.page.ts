
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {

  }


  navigateToClientDetails() {
    this.router.navigate(['/client-details']);
  }

  navigateToWorkoutPlan() {
    this.router.navigate(['/workout-plan']);
  }

  navigateToPrivacy() {
    this.router.navigate(['/privacy']);
  }


  logout() {
    this.router.navigate(['/login']);
  }
}

