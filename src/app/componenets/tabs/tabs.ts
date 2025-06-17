import { Component, Input, Output, output } from '@angular/core';

export interface TabItem {
  title: string;
  description: string;
}

@Component({
  selector: 'app-tabs',
  standalone: false,
  templateUrl: './tabs.html',
  styleUrl: './tabs.css'
})
export class Tabs {
@Input() isFormEnabled: boolean = true;
@Output() 
activeIndex: number = 0;
  items: TabItem[] = [
    {
      title: 'Beautiful Mountains',
      description: 'Scenic view of mountains during daytime.'
    },
    {
      title: 'Ocean Waves',
      description: 'Blue ocean water with waves crashing.'
    },
    {
      title: 'Beautiful Mountains',
      description: 'Scenic view of mountains during daytime.'
    }
  ];

  AddSlide(newItem: TabItem){
      this.items.push(newItem);
      this.ChangeTab(0);
      console.log(newItem);
      console.log(this.items);
      
      
    }
  
    RemoveSlide(index: number) {
      if(index == this.activeIndex)
        this.ChangeTab(-1);
      this.items.splice(index, 1);
      this.ChangeTab(0);
    }
  
    ChangeTab(val: number){
      if(this.items.length == 0)
      {
        this.activeIndex = 0;
        return;
      }
      this.activeIndex = (this.activeIndex + val)%this.items.length;
      if(this.activeIndex < 0 && this.items.length > 1)
        this.activeIndex = this.items.length -1;
    }
}
