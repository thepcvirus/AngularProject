import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router'; // Added RouterLink
import { AuthService } from '../../services/auth-service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Added CommonModule

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule, // Required for common directives
    RouterLink // Added RouterLink directive
  ],
  templateUrl: './app-login.html',
  styleUrl: './app-login.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private auth: AuthService, private router: Router) {}

  onLogin() {
    this.auth.login(this.email, this.password)
      .catch(error => console.error(error));
  }
}