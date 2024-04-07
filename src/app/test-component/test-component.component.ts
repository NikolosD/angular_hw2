import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-test-component',
  standalone: true,
  imports: [],
  templateUrl: './test-component.component.html',
  styleUrl: './test-component.component.css'
})
export class TestComponentComponent {

  @Input({alias: 'nika'})

  task!: string

  @Output() newItemEvent = new EventEmitter<string>()

  items: string[] = [];
  addNewItem(value:string){
    this.newItemEvent.emit(value)
    this.items.push(value)
  }

  removeItem(index: number){
    this.items.splice(index,1)
  }
}
