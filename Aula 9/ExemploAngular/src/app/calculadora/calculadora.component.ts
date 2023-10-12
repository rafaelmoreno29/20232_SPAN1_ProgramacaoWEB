import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css'],
})
export class CalculadoraComponent implements OnInit {
  num1: number = 0;
  num2: number = 0;
  resultado: number = 0;
  operacao: string = '+';
  constructor() {}

  ngOnInit(): void {}

  calcular() {
    if (this.operacao == '+') this.resultado = this.num1 + this.num2;
    else if (this.operacao == '-') this.resultado = this.num1 - this.num2;
  }
}
