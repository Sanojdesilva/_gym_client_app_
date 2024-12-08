// src/app/models/client.model.ts

export interface User {
  client_id: number;
  name: string;
  dob: string;
  gender: string;
  fitness_program: string;
  email: string;
  password: string;
  joined_date: string;
  ending_date: string;
  special_health_notes: string;
  personaltrainer_id: number;
}

export interface LoginResponse {
  message: string;
  user: User;
}

export interface Workout {
  workout_id: number;
  fitness_program: string;
  day: string;
  exercise_name: string;
  description: string;
  sets: number[];
}

export interface WorkoutResponse {
  workouts: Workout[];
}

export interface Client {
  client_id: number;
  name: string;
  dob: string;
  gender: string;
  fitness_program: string;
  email: string;
  password: string;
  joined_date: string;
  ending_date: string;
  special_health_notes: string;
  personaltrainer_id: number;
}
