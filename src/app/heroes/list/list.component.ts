import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  heroes = ['spiderman', 'superman', 'ironman', 'batman', 'catwoman', 'goku'];

  constructor() { }

  ngOnInit(): void {
  }

}
