import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../services/auth-service';
import { MainSettings } from '../../main-settings/main-settings';
import { ISettings } from '../../main-body/main-body';
import { NavService } from '../../nav-service';
  export  const width = 0

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, MainSettings],
  templateUrl: './nav-bar.html',
  styleUrls: ['./nav-bar.css']
})
export class NavbarComponent implements OnInit  {
settings: ISettings;

  constructor(
    public auth: AuthService, 
    private router: Router,
    private navService: NavService
  ) {
    // Initialize in constructor
    this.settings = this.navService.getCurrentSettings();
  }




  logout() {
  this.auth.logout()
    .then(() => {
      // Navigation is already handled in AuthService
    })
    .catch(error => {
      console.error('Logout error:', error);
      // Optionally show error message to user
    });
}

  refreshNavBar(){
    
  }

  ngOnInit() {
    this.settings = this.navService.getCurrentSettings();
  }

  updateSettings(newSettings: ISettings) {
    this.navService.updateSettings(newSettings);
  }
}