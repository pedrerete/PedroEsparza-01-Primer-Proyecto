import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Personaje } from '../interfaces/op.interface';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {



  personajes: Personaje[] = [
    {
      nombre: 'Luffy',
      poder: 10000
    },
    {
      nombre: 'Zoro',
      poder: 9000
    },
    {
      nombre: 'Sanji',
      poder: 8000
    }
  ]
  nuevo: Personaje={
    nombre : "",
    poder: 0
  }
}
