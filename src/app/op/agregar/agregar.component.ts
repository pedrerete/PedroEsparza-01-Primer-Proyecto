import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/op.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {

  @Input() personajes: Personaje[] = [];

  @Input() nuevo: Personaje = {
    nombre: "",
    poder: 0
  }



  agregar() {
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }
    let personajeNuevo: Personaje = {
      nombre: this.nuevo.nombre,
      poder: this.nuevo.poder
    }
    this.personajes.push(personajeNuevo)
    this.nuevo.nombre = ""
    this.nuevo.poder = 0
  }
}
