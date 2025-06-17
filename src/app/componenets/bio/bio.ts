import { Component, Input, input } from '@angular/core';
import { GoogleGenAI } from '@google/genai';

@Component({
  selector: 'app-bio',
  standalone: false,
  templateUrl: './bio.html',
  styleUrl: './bio.css'
})
export class Bio {
  @Input() isFormEnabled: boolean = true;
  BioData: string = "Temp Data"

  updateData(newBio:string){
this.BioData = newBio;
  }
}
