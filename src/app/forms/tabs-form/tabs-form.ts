import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TabItem, Tabs } from '../../componenets/tabs/tabs';
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
  @Output() UpdateList = new EventEmitter<TabItem[]>();
  
  @Input() submittedItems: TabItem[] = [];
  newItem: TabItem = {
    title: '',
    description: ''
  };

  submitForm() {
    if (this.newItem.description && this.newItem.title) {
      //this.AddItem.emit({...this.newItem});
      //this.submittedItems.push({...this.newItem});
      this.submittedItems.push(this.newItem);
      this.UpdateList.emit(this.submittedItems);
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
    //this.RemoveItem.emit(index);
    this.submittedItems.splice(index, 1);
    this.UpdateList.emit(this.submittedItems);
  }

  saveFormData() {
    this.UpdateList.emit(this.submittedItems);
    localStorage.setItem('TabsData', JSON.stringify(this.submittedItems));
    alert('Data saved!');
  }

  loadFormData() {
    
    const savedData = localStorage.getItem('TabsData');
    if (savedData) {
      this.submittedItems = JSON.parse(savedData);
      this.UpdateList.emit(this.submittedItems);
    }
    
  }
}
