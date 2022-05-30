import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/op.interface";

@Injectable({
  providedIn: "root"
})
export class OpService {

  private _listaPersonajes: Personaje[] = [
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

  get ListaPersonajes() {
    return [...this._listaPersonajes];
  }

  agregarNuevoPersonaje(evento: Personaje) {

    let personajeNuevo: Personaje = {
      nombre: evento.nombre,
      poder: evento.poder
    }
    this._listaPersonajes.push(personajeNuevo)


  }
}   
