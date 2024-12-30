import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent {
  number1: number = 0;
  number2: number = 0;
  operation: string = '+';
  result: number | null = null;

  calculate() {
    switch (this.operation) {
      case '+':
        this.result = this.number1 + this.number2;
        break;
      case '-':
        this.result = this.number1 - this.number2;
        break;
      case '*':
        this.result = this.number1 * this.number2;
        break;
      case '/':
        this.result = this.number2 !== 0 ? this.number1 / this.number2 : null;
        break;
      default:
        this.result = null;
    }
  }
}
