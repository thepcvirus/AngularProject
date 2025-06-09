import { Component, signal } from '@angular/core';
import { Greeting } from '../componenet/greeting/greeting';
import { Counter } from '../componenet/counter/counter';

@Component({
  selector: 'app-home',
  imports: [Greeting,Counter],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  homeMessage = signal("Home Message");

  keyUpHandler(){
    console.log("Empty Key Function");
  }

  SecondkeyUpHandler(event: KeyboardEvent){
    console.log(`Key ${event.key} is pressed`);
  }
}
