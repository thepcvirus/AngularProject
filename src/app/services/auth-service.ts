import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isuserLoggedIn = new BehaviorSubject<boolean>(false);

  constructor(private afAuth: AngularFireAuth, private router: Router) {
    this.afAuth.authState.subscribe(user => {
      this.isuserLoggedIn.next(!!user);
    });
  }

  // Login with email/password
  login(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email, password)
      .then(() => this.router.navigate(['/home']))
      .catch(error => {
        alert(error.message);
        throw error;
      });
  }

  // Register with email/password
  signUp(email: string, password: string) {
    return this.afAuth.createUserWithEmailAndPassword(email, password)
      .then(() => this.router.navigate(['/login']))
      .catch(error => {
        alert(error.message);
        throw error;
      });
  }

  // Send password reset email
  forgotPassword(email: string) {
    return this.afAuth.sendPasswordResetEmail(email)
      .then(() => alert('Password reset email sent!'))
      .catch(error => {
        alert(error.message);
        throw error;
      });
  }

  // Logout
  logout(): Promise<void> {
  return this.afAuth.signOut()
    .then(() => {
      this.router.navigate(['/login']); // Redirect to login page
      this.isuserLoggedIn.next(false); // Update authentication state
    });
}

  // Check if user is logged in
  isLoggedIn() {
    return this.afAuth.authState;
  }
}