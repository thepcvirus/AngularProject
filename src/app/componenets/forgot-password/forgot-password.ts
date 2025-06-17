import { Component } from '@angular/core';
import { AuthService } from '../../services/auth-service';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [FormsModule, RouterLink, CommonModule],
  template: `
    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-md-6 col-lg-4">
          <div class="card shadow">
            <div class="card-body p-4">
              <h2 class="card-title text-center mb-4">Forgot Password</h2>
              
              <form (ngSubmit)="onForgotPassword()" class="needs-validation" novalidate>
                <div class="mb-3">
                  <label for="email" class="form-label">Email address</label>
                  <input 
                    type="email" 
                    class="form-control" 
                    id="email"
                    [(ngModel)]="email" 
                    name="email" 
                    placeholder="Enter your email"
                    required
                  >
                  <div class="invalid-feedback">
                    Please provide a valid email.
                  </div>
                </div>

                <div class="d-grid gap-2 mb-3">
                  <button 
                    type="submit" 
                    class="btn btn-primary"
                    [disabled]="!email || isLoading"
                  >
                    <span *ngIf="!isLoading">Reset Password</span>
                    <span *ngIf="isLoading" class="spinner-border spinner-border-sm"></span>
                  </button>
                </div>

                <div class="text-center">
                  <a routerLink="/login" class="text-decoration-none">
                    <i class="bi bi-arrow-left"></i> Back to login
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .card {
      border-radius: 15px;
      border: none;
    }
    .btn-primary {
      background-color: #0d6efd;
      border: none;
      padding: 10px;
      border-radius: 8px;
    }
    .form-control {
      border-radius: 8px;
      padding: 12px;
    }
    a {
      color: #0d6efd;
      transition: color 0.3s;
    }
    a:hover {
      color: #0b5ed7;
    }
  `]
})
export class ForgotPasswordComponent {
  email: string = '';
  isLoading: boolean = false;

  constructor(
    private auth: AuthService,
    private router: Router  // Inject Router for navigation
  ) {}

  onForgotPassword() {
    if (!this.email) return;
    
    this.isLoading = true;
    
    this.auth.forgotPassword(this.email)
      .then(() => {
        // Show success message and redirect after 2 seconds
        alert('Password reset email sent! You will be redirected to login.');
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 2000);
      })
      .catch(error => {
        console.error(error);
        alert('Error sending reset email: ' + error.message);
      })
      .finally(() => {
        this.isLoading = false;
      });
  }
}