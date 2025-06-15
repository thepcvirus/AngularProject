import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TabItem } from '../../componenets/tabs/tabs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tabs-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tabs-form.html',
  styleUrl: './tabs-form.css'
})
export class TabsForm {
  @Output() AddItem = new EventEmitter<TabItem>();
  @Output() RemoveItem = new EventEmitter<number>();
  
  @Input() submittedItems: TabItem[] = [];
  newItem: TabItem = {
    title: '',
    description: ''
  };

  submitForm() {
    if (this.newItem.description && this.newItem.title) {
      this.AddItem.emit({...this.newItem});
      //this.submittedItems.push({...this.newItem});
      this.resetForm();
    }
  }

  private resetForm() {
    this.newItem = {
      title: '',
      description: ''
    };
  }

  removeItem(index: number) {
    this.RemoveItem.emit(index);
  }
}
