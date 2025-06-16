import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ISettings } from '../main-body/main-body';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-settings',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './main-settings.html',
  styleUrls: ['./main-settings.css']
})
export class MainSettings {
  @Output() updateSettigns = new EventEmitter<ISettings>();
  // Local form values
  @Input() Holdersettings: ISettings = {
    isFormEnabled: true,
    BackgroundImgUrl: "",
    Width: 0,
    backgroundColor: '',
    colorPalette: [
    ]
  };

  onSubmit() {
    this.updateSettigns.emit(this.Holdersettings);
  }

  saveFormData() {
    localStorage.setItem('formData', JSON.stringify(this.Holdersettings));
    alert('Data saved!');
  }

  loadFormData() {
    const savedData = localStorage.getItem('formData');
    if (savedData) {
      this.Holdersettings = JSON.parse(savedData);
    }
  }
}