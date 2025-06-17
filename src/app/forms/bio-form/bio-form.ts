import { Component, EventEmitter, Output } from '@angular/core';
import { GoogleGenAI } from '@google/genai';

@Component({
  selector: 'app-bio-form',
  standalone: false,
  templateUrl: './bio-form.html',
  styleUrl: './bio-form.css'
})
export class BioForm {
@Output() UpdateMain = new EventEmitter<string>();

  topic: string = '';
  SubmittedText: string | undefined = '';
  isLoading: boolean = false;
  aiResponse: string | undefined = '';
  showResponse: boolean = false;
  ai = new GoogleGenAI({ apiKey: "AIzaSyBk0aRfpGtMQ7vD5k-jO2LNeM0k_Qy8XdA" });
  constructor(  ) {
    //this.main();
  }



async main() {
  // Only proceed if there's a topic
  if (!this.topic) {
    this.aiResponse = "";
    return;
  }

  this.isLoading = true; // Set loading to true when request starts
  this.showResponse = false; // Hide previous response while loading

  try {
    const response = await this.ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: "Make this personal describtion better (" + this.topic + ")  make it ready for pasting with no additional text",
    });
    
    this.aiResponse = response.text;
    this.showResponse = true; // Show the new response
    console.log(response.text);
  } catch (error) {
    console.error("Error fetching AI response:", error);
    this.aiResponse = "An error occurred while generating the response.";
  } finally {
    this.isLoading = false; // Always set loading to false when done
  }
}

  onSubmit() {
    this.SubmittedText = this.topic;
    this.UpdateMain.emit(this.SubmittedText);
  }

  optimize(){
    this.main();
  }

  UseGenerated(){
    this.SubmittedText = this.aiResponse;
    this.UpdateMain.emit(this.SubmittedText);
  }

  saveFormData() {
    
    localStorage.setItem('BioData', JSON.stringify(this.SubmittedText));
    this.UpdateMain.emit(this.SubmittedText);
    alert('Data saved!');
  }

  loadFormData() {
    const savedData = localStorage.getItem('BioData');
    if (savedData) {
      this.SubmittedText = JSON.parse(savedData);
      this.UpdateMain.emit(this.SubmittedText);
    }
}
}
