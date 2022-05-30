import { Component } from '@angular/core';
import { Personaje } from '../interfaces/op.interface';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  nuevoPersonaje: Personaje = {
    nombre: "",
    poder: 0
  }

}
