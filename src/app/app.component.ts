import { Component } from '@angular/core';
import {CounterComponent} from "./counter/counter.component";
import {TodoListComponent} from "./todo-list/todo-list.component";
import {TestComponentComponent} from "./test-component/test-component.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  styleUrls: ['./app.component.css'],
  imports: [
    CounterComponent,
    TodoListComponent,
    TestComponentComponent
  ]
})
export class AppComponent {

  logEvent() {
    console.log('123')
  }
}
