import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/op.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {

//  @Input() personajes: Personaje[] = [];

  @Input() nuevo: Personaje = {
    nombre: "",
    poder: 0
  }

  @Output () nuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();


  agregar() {
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }
    this.nuevoPersonaje.emit(this.nuevo);
    this.nuevo.nombre = ""
    this.nuevo.poder = 0
  }
}
