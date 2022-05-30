import { Component, Inject, Input, OnInit } from '@angular/core';
import { OpService } from '../services/op.services';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent {

  get personajes() {
    return this.opService.ListaPersonajes;
  }

  constructor(private opService: OpService) { }


}
