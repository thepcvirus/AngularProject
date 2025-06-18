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
    <div class="forgot-password-container">
      <div class="auth-card">
        <div class="card-header">
          <i class="bi bi-shield-lock"></i>
          <h1>Reset Your Password</h1>
          <p class="subtext">Enter your email to receive a password reset link</p>
        </div>

        <form (ngSubmit)="onForgotPassword()" class="auth-form">
          <div class="form-group">
            <label for="email">Email Address</label>
            <div class="input-group">
              <i class="bi bi-envelope"></i>
              <input 
                type="email" 
                id="email"
                [(ngModel)]="email" 
                name="email" 
                placeholder="your@email.com"
                required
                [class.invalid]="emailInvalid"
              >
            </div>
            <div class="error-message" *ngIf="emailInvalid">
              Please enter a valid email address
            </div>
          </div>

          <button 
            type="submit" 
            class="submit-btn"
            [disabled]="!email || isLoading"
          >
            <span *ngIf="!isLoading">Send Reset Link</span>
            <span *ngIf="isLoading" class="spinner"></span>
          </button>

          <div class="footer-links">
            <a routerLink="/login" class="back-link">
              <i class="bi bi-arrow-left"></i> Return to Login
            </a>
          </div>
        </form>
      </div>
    </div>
  `,
  styles: [`
    .forgot-password-container {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
      padding: 2rem;
    }

    .auth-card {
      background: white;
      border-radius: 16px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
      width: 100%;
      max-width: 450px;
      overflow: hidden;
    }

    .card-header {
      padding: 2rem 2rem 1rem;
      text-align: center;
      background: linear-gradient(135deg, #4b6cb7 0%, #182848 100%);
      color: white;
    }

    .card-header i {
      font-size: 2.5rem;
      margin-bottom: 1rem;
      color: white;
    }

    .card-header h1 {
      font-size: 1.75rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
    }

    .subtext {
      opacity: 0.9;
      font-size: 0.95rem;
      margin-bottom: 0;
    }

    .auth-form {
      padding: 2rem;
    }

    .form-group {
      margin-bottom: 1.5rem;
    }

    .form-group label {
      display: block;
      margin-bottom: 0.5rem;
      font-weight: 500;
      color: #2d3748;
    }

    .input-group {
      position: relative;
      display: flex;
      align-items: center;
    }

    .input-group i {
      position: absolute;
      left: 1rem;
      color: #718096;
    }

    .input-group input {
      width: 100%;
      padding: 0.75rem 1rem 0.75rem 2.5rem;
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      font-size: 1rem;
      transition: all 0.3s ease;
    }

    .input-group input:focus {
      outline: none;
      border-color: #4b6cb7;
      box-shadow: 0 0 0 3px rgba(75, 108, 183, 0.2);
    }

    .input-group input.invalid {
      border-color: #e53e3e;
    }

    .error-message {
      color: #e53e3e;
      font-size: 0.85rem;
      margin-top: 0.25rem;
    }

    .submit-btn {
      width: 100%;
      padding: 1rem;
      background: linear-gradient(135deg, #4b6cb7 0%, #182848 100%);
      color: white;
      border: none;
      border-radius: 8px;
      font-size: 1rem;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.3s ease;
      margin-bottom: 1.5rem;
    }

    .submit-btn:hover:not(:disabled) {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(75, 108, 183, 0.3);
    }

    .submit-btn:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }

    .spinner {
      display: inline-block;
      width: 1.25rem;
      height: 1.25rem;
      border: 3px solid rgba(255, 255, 255, 0.3);
      border-radius: 50%;
      border-top-color: white;
      animation: spin 1s ease-in-out infinite;
    }

    @keyframes spin {
      to { transform: rotate(360deg); }
    }

    .footer-links {
      text-align: center;
    }

    .back-link {
      color: #4b6cb7;
      text-decoration: none;
      font-size: 0.95rem;
      transition: color 0.3s ease;
      display: inline-flex;
      align-items: center;
      gap: 0.25rem;
    }

    .back-link:hover {
      color: #182848;
      text-decoration: underline;
    }

    /* Responsive adjustments */
    @media (max-width: 480px) {
      .auth-card {
        border-radius: 12px;
      }
      
      .card-header {
        padding: 1.5rem 1.5rem 0.75rem;
      }
      
      .auth-form {
        padding: 1.5rem;
      }
    }
  `]
})
export class ForgotPasswordComponent {
  email: string = '';
  isLoading: boolean = false;
  emailInvalid: boolean = false;

  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  onForgotPassword() {
    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    this.emailInvalid = !emailRegex.test(this.email);
    
    if (this.emailInvalid || !this.email) return;
    
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