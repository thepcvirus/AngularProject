import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardItem } from '../../componenets/card/card';



@Component({
  selector: 'app-card-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './card-form.html',
  styleUrl: './card-form.css'
})

export class CardForm {
  @Output() AddItem = new EventEmitter<CardItem>();
  @Output() RemoveItem = new EventEmitter<number>();
    @Output() UpdateList = new EventEmitter<CardItem[]>();
  @Input() submittedItems: CardItem[] = [];
  newItem: CardItem = {
    imageUrl: '',
    title: '',
    description: '',
    url: ''
  };

  submitForm() {
    if (this.newItem.imageUrl && this.newItem.title) {
      this.submittedItems.push(this.newItem);
      this.UpdateList.emit(this.submittedItems);
      this.resetForm();
    }
  }

  private resetForm() {
    this.newItem = {
      imageUrl: '',
      title: '',
      description: '',
      url:''
    };
  }

  removeItem(index: number) {
    this.submittedItems.splice(index, 1);
    this.UpdateList.emit(this.submittedItems);
  }

  saveFormData() {
    this.UpdateList.emit(this.submittedItems);
    localStorage.setItem('CardData', JSON.stringify(this.submittedItems));
    alert('Data saved!');
  }

  loadFormData() {
    const savedData = localStorage.getItem('CardData');
    if (savedData) {
      this.submittedItems = JSON.parse(savedData);
      this.UpdateList.emit(this.submittedItems);
    }
  }
}
