import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ISettings } from './main-body/main-body';

@Injectable({
  providedIn: 'root'
})
export class NavService {

  private settingsSubject = new BehaviorSubject<ISettings>({
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
  });
  settings$ = this.settingsSubject.asObservable();

  updateSettings(newSettings: ISettings) {
    this.settingsSubject.next(newSettings);
  }
}
