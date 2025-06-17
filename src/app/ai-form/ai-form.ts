import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { GoogleGenAI } from "@google/genai";

@Component({
  selector: 'app-ai-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './ai-form.html',
  styleUrls: ['./ai-form.css']
})
export class AiFormComponent {
  topic: string = '';
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
      contents: "write an article about " + this.topic + " and make it dont exceed 100 words and if this is not a title for a topic type please enter a topic name",
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

  async onSubmit() {
    this.main();
  }
}