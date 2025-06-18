import { Component, EventEmitter, Input, Output, OnInit ,AfterContentInit, signal, OnChanges, SimpleChanges } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { ISettings } from '../main-body/main-body';
import { CommonModule } from '@angular/common';
import { NavService } from '../nav-service';

@Component({
  selector: 'app-main-settings',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './main-settings.html',
  styleUrls: ['./main-settings.css']
})
// main-settings.ts
export class MainSettings implements OnInit {
  @Output() updateSettigns = new EventEmitter<ISettings>();
  Holdersettings!: ISettings; // Add definite assignment assertion

  constructor(private navService: NavService) {}

  ngOnInit(): void {
    this.Holdersettings = {...this.navService.getCurrentSettings()};
  }

  onSettingChange() {
  if (this.Holdersettings) {
    this.updateSettigns.emit({...this.Holdersettings});
    this.navService.updateSettings({...this.Holdersettings});
  }
}

  saveFormData() {
    localStorage.setItem('formData', JSON.stringify(this.Holdersettings));
    this.onSettingChange(); // Emit changes after save
    alert('Data saved!');
  }

  loadFormData() {
    const savedData = localStorage.getItem('formData');
    if (savedData) {
      this.Holdersettings = JSON.parse(savedData);
      this.onSettingChange(); // Emit changes after load
    }
  }
}