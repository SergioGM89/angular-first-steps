import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  constructor() { }

  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Krillin',
      power: 1000
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 9500
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 7500
    }
  ];

  onDeleteCharacterById(id: string): void{
    this.characters = this.characters.filter(character => character.id !== id);
  }

  addCharacter(character: Character){
    const newCharacter : Character = { ...character, id: uuid()};

    this.characters.push(newCharacter)
  }
}
