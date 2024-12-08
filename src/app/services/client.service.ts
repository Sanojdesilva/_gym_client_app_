// src/app/services/client.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginResponse, Workout, Client, User } from '../models/client.model';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  private apiUrl = 'https://nehemia.it.scu.edu.au/personaltrainer';


  constructor(private http: HttpClient) {}

  // Log client
  loginClient(email: string, password: string): Observable<LoginResponse> {
    const loginData = { email, password };
    return this.http.post<LoginResponse>(`${this.apiUrl}/client/login`, loginData);
  }

  // Get client details
  getClientDetails(clientId: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/client/${clientId}`);
  }

  // Get workout plan
  getWorkoutPlan(clientId: number): Observable<Workout[]> { 
    return this.http.get<Workout[]>(`${this.apiUrl}/workoutplan/${clientId}`);
  }

  // Get all client
  getClientsByTrainer(trainerId: number): Observable<Client[]> {
    return this.http.get<Client[]>(`${this.apiUrl}/trainer/${trainerId}/clients`);
  }
}
