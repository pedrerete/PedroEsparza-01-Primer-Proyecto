import { Component } from '@angular/core';
@Component({
  selector: 'app-contador',
  template: `
    <h1>{{title}}</h1>
    <button (click)="restar()">-1</button>
    <span>Base: {{base}} </span>
    <button (click)="sumar()">+1</button>
    <button (click)="acumular(base*-1)">-{{base}}</button>
    <span>Contador: {{contador}} </span>
    <button (click)="acumular(base)">+{{base}}</button>
    `
})
export class ContadorComponent {
  title = 'Contador';
  contador = 0;
  base: number = 5;
  sumar() {
    this.base++;
  }
  restar() {
    this.base--;
  }
  acumular(valor: number) {
    this.contador += valor;
  }
}