import { Component, inject, Input, OnInit } from '@angular/core';
import { AuthService } from '../services/auth-service';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../componenets/nav-bar/nav-bar';
import { width } from '../componenets/nav-bar/nav-bar';
import { NavService } from '../nav-service';

export interface ISettings {
  isFormEnabled: boolean;
  BackgroundImgUrl: string;
  Width: number;
  backgroundColor: string;
  colorPalette: string[];
}

@Component({
  selector: 'app-main-body',
  standalone: false,
  templateUrl: './main-body.html',
  styleUrl: './main-body.css'
})
export class MainBody implements OnInit {
  private navService = inject(NavService);
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

  constructor(public auth: AuthService, private router: Router) {}

  ngOnInit() {
    // Proper authentication check with subscription
    if(!this.auth.isuserLoggedIn){
      this.router.navigate(['/login']);
    }

    this.navService.settings$.subscribe(newSettings => {
      this.settings = newSettings;
    });
  }
}