// nav-service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ISettings } from './main-body/main-body';

@Injectable({ providedIn: 'root' })
export class NavService {
  private defaultSettings: ISettings = {
    isFormEnabled: true,
    BackgroundImgUrl: "https://images.pexels.com/photos/949587/pexels-photo-949587.jpeg",
    Width: 50,
    backgroundColor: '#ffffff',
    colorPalette: [
      '#ffffff', '#3498db', '#2ecc71', '#e74c3c', '#f1c40f', '#dddddd'
    ]
  };

  private settingsSubject = new BehaviorSubject<ISettings>(this.defaultSettings);
  settings$ = this.settingsSubject.asObservable();

  updateSettings(settings: Partial<ISettings>) {
    const current = this.settingsSubject.value;
    this.settingsSubject.next({...current, ...settings});
  }

  getCurrentSettings(): ISettings {
    return this.settingsSubject.value;
  }
}