import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  standalone: true,
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent {
  count: number = 0;

  increment() {
    this.count++;
  }

  decrement() {
    if (this.count > 0) {
      this.count--;
    }
  }
}
