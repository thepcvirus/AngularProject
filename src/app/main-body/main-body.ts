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
// main-body.ts
export class MainBody implements OnInit {
  private navService = inject(NavService);
  settings: ISettings = this.navService.getCurrentSettings();

  ngOnInit() {
    this.navService.settings$.subscribe(newSettings => {
      this.settings = newSettings;
    });
  }
}