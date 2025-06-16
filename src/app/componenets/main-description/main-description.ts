import { Component, Input, input } from '@angular/core';
export interface ImainDescription {
  ImageUrl: string;
  Header: string;
  Description: string;
  UrlLink: string;
  UrlText: string;
}

@Component({
  selector: 'app-main-description',
  standalone: false,
  templateUrl: './main-description.html',
  styleUrl: './main-description.css'
})
export class MainDescription {
  @Input() isFormEnabled: boolean = true;
  mainDesc: ImainDescription = {
    ImageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    Header: "Header",
    Description: "Another instance of placeholder content for this other custom component. It is intended to mimic what some real-world content would look like, and we're using it here to give the component a bit of body and size.",
    UrlLink: "https://www.google.com",
    UrlText: "Googlez"
  };
}
