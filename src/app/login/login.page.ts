import { Component } from '@angular/core';
import { ClientService } from '../services/client.service';
import { Router } from '@angular/router';
import { LoginResponse } from '../models/client.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string = '';
  password: string = '';
  loginError: string = '';

  constructor(
    private clientService: ClientService,
    private authService: AuthService,
    private router: Router
  ) {}

  login() {
    this.clientService.loginClient(this.email, this.password).subscribe(
      (response: LoginResponse) => {
        if (response.message === 'Login successful') {
          this.authService.setUser(response.user);
          this.router.navigate(['/home']);
        } else {
          this.loginError = response.message || 'Invalid email or password';
        }
      },
      (error) => {
        this.loginError = 'Error during login, please try again';
        console.error('Error during login', error);
      }
    );
  }
}
