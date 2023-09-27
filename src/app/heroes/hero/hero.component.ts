import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heros-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  nombre: string = 'ironman';
  edad: number = 45;
  changeName: boolean = true;
  changeAge: boolean = true;


  constructor() { }

  ngOnInit(): void {
  }

  get capitalizedName(): string {
    return this.nombre.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.nombre} - ${this.edad}`;
  }

  changedName(): void {
    this.nombre = 'spiderman';
    this.changeName = false
  }

  changedAge(): void {
    this.edad = 25;
    this.changeAge = false;
  }

}
