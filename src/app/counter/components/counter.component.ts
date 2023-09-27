import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  counter: number = 10;

  /**
   * The function increases the value of the counter by a specified amount.
   * @param {number} value - The value parameter is a number that represents the amount by which the
   * counter should be increased.
   */
  increaseBy(value: number): void {
    this.counter += value;
  }


  /**
   * The function "reset" returns the value 10 and assigns it to the variable "counter".
   * @returns The value of the counter variable, which is set to 10.
   */
  reset(): number {
    return this.counter = 10;
  }

}
