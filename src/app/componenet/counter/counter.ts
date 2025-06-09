import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.scss'
})
export class Counter {
  countervalue = signal(0);

  increament(){
    this.countervalue.set(this.countervalue() + 1);
  }
  decreament(){
    this.countervalue.update(val=> val - 1);
  }
  reset(){
    this.countervalue.set(0);
  }
}
