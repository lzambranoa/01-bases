import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { Character } from '../interfaces/character.interface';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.component.html'
})

export class MainPageComponent {
    
    //Inyeccion de dependencias
    constructor(private dbzService: DbzService){}

    get character(): Character[] {
        return this.dbzService.character;
    }

    onDeleteCharacter( id: string ): void {
        this.dbzService.deletedCharacterById( id );
    }

    onNewCharacter(character: Character): void {
        this.dbzService.addCharacter(character);
    }

    
}