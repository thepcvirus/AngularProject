import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ImainDescription } from '../../componenets/main-description/main-description';

@Component({
  selector: 'app-main-description-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './main-description-form.html',
  styleUrl: './main-description-form.css'
})
export class MainDescriptionForm {
  @Input() Item: ImainDescription = {
    ImageUrl: '',
    Header: '',
    Description: '',
    UrlLink: '',
    UrlText: ''
  };

  // Must be named 'ItemChange' for two-way binding
  @Output() ItemChange = new EventEmitter<ImainDescription>();

  submitForm() {
    if (this.Item.ImageUrl && this.Item.Header) {
      this.ItemChange.emit(this.Item); // Emit the updated value
      console.log('Form submitted:', this.Item);
    }
  }

  saveFormData() {
    localStorage.setItem('MainDescriptionData', JSON.stringify(this.Item));
    alert('Data saved!');
  }

  loadFormData() {
    const savedData = localStorage.getItem('MainDescriptionData');
    if (savedData) {
      this.Item = JSON.parse(savedData);
    }
  }
}