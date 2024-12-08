// src/app/services/auth.service.ts
import { Injectable } from '@angular/core';
import { User } from '../models/client.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUser: User | null = null;

  constructor() {}

  setUser(user: User) {
    this.currentUser = user;
  }

  getUser(): User | null {
    return this.currentUser;
  }

  clearUser() {
    this.currentUser = null;
  }
}
