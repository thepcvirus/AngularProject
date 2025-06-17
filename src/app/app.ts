import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth-service';
import { Router } from '@angular/router';
import { ISettings } from './main-body/main-body';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App implements OnInit{
   settings: ISettings = {
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

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {
    // this.auth.isLoggedIn().subscribe(user => {
    //   if (!user) {
    //     this.router.navigate(['/login']);
    //     console.log(false);
    //   }
    //   else
    //   console.log(true);
    // });
  }
  protected title = 'WebsiteBuilder';
}
