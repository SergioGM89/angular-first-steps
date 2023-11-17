import { Component, EventEmitter, Input, Output } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

@Input()
public characterList: Character[] = [
  {
    id: uuid(),
    name: 'Trunks',
    power: 10
  }
]

@Output()
public onDeleteId: EventEmitter<string> = new EventEmitter();

onDeleteCharacterById(id: string): void{
  this.onDeleteId.emit(id);
  console.log(id);
}
}
