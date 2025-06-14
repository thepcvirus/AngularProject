import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface CarouselItem {
  imageUrl: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-carousel',
  standalone: false,  // Change this back to true
  templateUrl: './carousel.html',
  styleUrl: './carousel.css'
})
export class Carousel implements OnInit, OnDestroy {
  activeIndex: number = 2;
  items: CarouselItem[] = [
    {
      imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
      title: 'Beautiful Mountains',
      description: 'Scenic view of mountains during daytime.'
    },
    {
      imageUrl: 'https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg',
      title: 'Ocean Waves',
      description: 'Blue ocean water with waves crashing.'
    }
    ,
    {
      imageUrl: 'https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg',
      title: 'Ocean Waves',
      description: 'Blue ocean water with waves crashing.'
    }
    ,
    {
      imageUrl: 'https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg',
      title: 'Ocean Waves',
      description: 'Blue ocean water with waves crashing.'
    }
  ];

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
  ngOnInit(): void {
  } 

  AddSlide(newItem: CarouselItem){
    this.items.push(newItem);
    this.ChangeImage(0);
  }

  RemoveSlide(index: number) {
    if(index == this.activeIndex)
      this.ChangeImage(-1);
    this.items.splice(index, 1);
    this.ChangeImage(0);
  }

  ChangeImage(val: number){
    if(this.items.length == 0)
    {
      this.activeIndex = 0;
      return;
    }
    this.activeIndex = (this.activeIndex + val)%this.items.length;
    if(this.activeIndex < 0 && this.items.length > 1)
      this.activeIndex = this.items.length -1;
  }

  AddRandomSlide() {
    const newItem: CarouselItem = {
      imageUrl: 'https://picsum.photos/800/400?random=' + Math.random(), // Random image
      title: 'New Slide ' + (this.items.length + 1),
      description: 'This slide was added dynamically!'
    };
    this.items.push(newItem);
    this.ChangeImage(0);
  }
}