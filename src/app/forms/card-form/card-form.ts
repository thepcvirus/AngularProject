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
  
  @Input() submittedItems: CardItem[] = [];
  newItem: CardItem = {
    imageUrl: '',
    title: '',
    description: '',
    url: ''
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
      description: '',
      url:''
    };
  }

  removeItem(index: number) {
    this.RemoveItem.emit(index);
  }
}
