import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private Authenticated: boolean = true;

  constructor() { }

  login() {
    
    this.Authenticated = false;
  }

  logout() {
    // Simulate logout
    this.Authenticated = false;
  }

  isAuthenticated() {
    return this.Authenticated;
  }
}
