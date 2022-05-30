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
  nuevo: Personaje = {
    nombre: "",
    poder: 0
  }

  agregar(){
    if(this.nuevo.nombre.trim().length === 0){
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
