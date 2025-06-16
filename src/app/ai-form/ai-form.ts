import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ai-form',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './ai-form.html',
  styleUrls: ['./ai-form.css']
})
export class AiFormComponent {
  topic: string = '';
  isLoading: boolean = false;
  aiResponse: string = '';
  showResponse: boolean = false;

  async onSubmit() {
    if (!this.topic.trim()) return;

    this.isLoading = true;
    this.showResponse = false;

    try {
      this.aiResponse = await this.generateAIResponse(this.topic);
      this.showResponse = true;
    } catch (error) {
      this.aiResponse = `Error: ${error instanceof Error ? error.message : 'Failed to generate response'}`;
      this.showResponse = true;
    } finally {
      this.isLoading = false;
    }
  }

  private async generateAIResponse(topic: string): Promise<string> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Generate different responses based on topic
    if (topic.toLowerCase().includes('science')) {
      return this.generateScienceArticle(topic);
    } else if (topic.toLowerCase().includes('technology')) {
      return this.generateTechArticle(topic);
    } else {
      return this.generateGeneralArticle(topic);
    }
  }

  private generateScienceArticle(topic: string): string {
    return `# Scientific Article About ${topic}\n\n` +
      `Recent studies in ${topic} have revealed fascinating insights. Researchers at leading institutions ` +
      `have discovered that ${topic} plays a crucial role in modern scientific understanding. ` +
      `The implications of these findings could revolutionize how we approach ${topic.split(' ')[0]} in the future.\n\n` +
      `## Key Findings\n- Breakthrough discovery about ${topic}\n- Potential applications\n- Future research directions`;
  }

  private generateTechArticle(topic: string): string {
    return `# Technology Update: ${topic}\n\n` +
      `The ${topic} sector is experiencing rapid growth. Industry experts predict that ${topic} ` +
      `will transform the tech landscape within the next 5 years. Major companies are already ` +
      `investing heavily in ${topic} research and development.\n\n` +
      `## Current Trends\n- Latest ${topic} innovations\n- Market analysis\n- Future projections`;
  }

  private generateGeneralArticle(topic: string): string {
    return `# Comprehensive Overview of ${topic}\n\n` +
      `${topic} is a subject of growing interest across multiple disciplines. This article explores ` +
      `the fundamental aspects of ${topic}, its historical context, and contemporary relevance.\n\n` +
      `## Main Points\n1. Introduction to ${topic}\n2. Key characteristics\n3. Practical applications\n4. Future outlook`;
  }
}