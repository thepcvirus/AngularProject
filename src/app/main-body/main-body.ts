import { Component } from '@angular/core';

export interface ISettings {
  isFormEnabled: boolean;
  BackgroundImgUrl : string;
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
export class MainBody {

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

  updateSettings(newSettings: ISettings){
    this.settings = newSettings;
  }
}
