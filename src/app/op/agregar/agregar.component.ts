import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/op.interface';
import { OpService } from '../services/op.services';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {


  @Input() nuevo: Personaje = {
    nombre: "",
    poder: 0
  }
  constructor(private opService: OpService) { }


  agregar() {
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }
    this.opService.agregarNuevoPersonaje(this.nuevo);
    this.nuevo = {
      nombre: "",
      poder: 0
    }
  }
}
