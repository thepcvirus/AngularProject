import { Component } from '@angular/core';
import { AuthService } from '../../services/auth-service';
import { Router, RouterLink } from '@angular/router'; // Added RouterLink
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Added CommonModule

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule, // Required for common directives
    RouterLink // Added RouterLink directive
  ],
  templateUrl: './app-signup.html',
  styleUrl: './app-signup.css'
})
export class SignupComponent {
  email: string = '';
  password: string = '';

  constructor(private auth: AuthService, private router: Router) { }

  onSignup() {
    this.auth.signUp(this.email, this.password)
      .catch(error => console.error(error));
  }
}