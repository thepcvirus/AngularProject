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
export class NavbarComponent  {
  constructor(public auth: AuthService, private router: Router, private navService:NavService)  { }
  logout() {
    this.auth.logout()
      .then(() => this.router.navigate(['/login']))
      .catch(error => console.error('Logout error:', error));
  }

  refreshNavBar(){
    
  }

  @Input() settings: ISettings = {
    isFormEnabled: true,
    BackgroundImgUrl: "https://images.pexels.com/photos/949587/pexels-photo-949587.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    Width: 50,
    backgroundColor: '#ffffff',
    colorPalette: [
      '#ffffff', // Nice blue
      '#3498db', // Nice blue
      '#2ecc71', // Emerald
      '#e74c3c', // Alizarin
      '#f1c40f', // Sunflower
      '#dddddd'
    ]
  };

  updateSettings(newSettings: ISettings) {
    this.settings = newSettings;
    this.navService.updateSettings(this.settings)
  }
}