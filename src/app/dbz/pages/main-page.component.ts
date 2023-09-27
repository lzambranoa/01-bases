import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.component.html'
})

export class MainPageComponent {
    
    public character: Character[] = [{
        name: 'Krilin',
        power: 1000
    },{
        name: 'Goku',
        power: 9500
    },{
        name: 'Vegeta',
        power: 7500
    }];

    onNewCharacter(character: Character): void {
        this.character.push(character);
    }

    onDeleteCharacter(id: number){
        this.character.splice(id, 1)
    }
}