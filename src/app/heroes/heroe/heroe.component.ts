import { Component } from '@angular/core';

@Component({
    selector: 'app-heroe',
    templateUrl: './heroe.component.html'
})
export class HeroeComponent {
    nombre: string = "Batman";
    edad: number = 40;
    obtenerNombre() {
        return this.nombre
    }
    get nombreCapitalizado(): string {
        return this.nombre.toUpperCase();
    }
    cambiarNombre() {
        this.nombre = "superman"
    }
    cambiarEdad() {
        this.edad = this.edad * 2
    }
}
