import { Component, Input } from '@angular/core';

export interface CardItem {
  imageUrl: string;
  title: string;
  description: string;
  url: string;
}

@Component({
  selector: 'app-card',
  standalone: false,
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class Card {
  @Input() isFormEnabled: boolean = true;
    items: CardItem[] = [
      {
        imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
        title: 'Beautiful Mountains',
        description: 'Scenic view of mountains during daytime.',
        url:""
      },
      {
        imageUrl: 'https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg',
        title: 'Ocean Waves',
        description: 'Blue ocean water with waves crashing.',
        url:""
      }
    ];
  

    UpdateList(newitems: CardItem[]){
        this.items = newitems;
      }

    ngOnDestroy(): void {
      throw new Error('Method not implemented.');
    }
    ngOnInit(): void {
    } 
  
    AddSlide(newItem: CardItem){
      this.items.push(newItem);
    }
  
    RemoveSlide(index: number) {
      this.items.splice(index, 1);
    }
  
    AddRandomSlide() {
      const newItem: CardItem = {
        imageUrl: 'https://picsum.photos/800/400?random=' + Math.random(), // Random image
        title: 'New Slide ' + (this.items.length + 1),
        description: 'This slide was added dynamically!',
        url: ""
      };
      this.items.push(newItem);
    }
}
