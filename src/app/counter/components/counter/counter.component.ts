import { Component } from '@angular/core'
const InitialValue: number = 10;

@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter: {{counter}}</h3>

    <button (click)="increaseBy(1)">+1</button>
    <button (click)="resetCounter()">Reset</button>
    <button (click)="increaseBy(-1)">-1</button>
  `
})

export class CounterComponent {

  public counter: number = InitialValue;

  increaseBy(value: number): void{
    this.counter += value;
  }

  resetCounter(): void {
    this.counter = InitialValue;
  }
}
