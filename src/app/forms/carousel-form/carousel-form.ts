import { Component, Output, EventEmitter, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CarouselItem } from '../../componenets/carousel/carousel';


@Component({
  selector: 'app-carousel-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './carousel-form.html',
  styleUrls: ['./carousel-form.css']
})
export class CarouselForm {
  @Output() AddItem = new EventEmitter<CarouselItem>();
  @Output() RemoveItem = new EventEmitter<number>();
  
  @Input() submittedItems: CarouselItem[] = [];
  newItem: CarouselItem = {
    imageUrl: '',
    title: '',
    description: ''
  };

  submitForm() {
    if (this.newItem.imageUrl && this.newItem.title) {
      this.AddItem.emit({...this.newItem});
      //this.submittedItems.push({...this.newItem});
      this.resetForm();
    }
  }

  private resetForm() {
    this.newItem = {
      imageUrl: '',
      title: '',
      description: ''
    };
  }

  removeItem(index: number) {
    this.RemoveItem.emit(index);
  }

  saveFormData() {
    localStorage.setItem('CarouselData', JSON.stringify(this.submittedItems));
    alert('Data saved!');
  }

  loadFormData() {
    const savedData = localStorage.getItem('CarouselData');
    if (savedData) {
      this.submittedItems = JSON.parse(savedData);
    }
  }
}