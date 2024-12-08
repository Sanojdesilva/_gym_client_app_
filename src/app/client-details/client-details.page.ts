import { Component, OnInit } from '@angular/core';
import { ClientService } from '../services/client.service';
import { User } from '../models/client.model';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.page.html',
  styleUrls: ['./client-details.page.scss'],
})
export class ClientDetailsPage implements OnInit {
  clientDetails: User | null = null;

  constructor(
    private clientService: ClientService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    const user = this.authService.getUser();
    if (user) {
      this.clientService.getClientDetails(user.client_id).subscribe(
        (response: User) => {
          this.clientDetails = response;
        },
        (error) => {
          console.error('Error fetching client details', error);
        }
      );
    } else {
      console.error('No user is currently logged in.');
      this.router.navigate(['/login']);
    }
  }
}
