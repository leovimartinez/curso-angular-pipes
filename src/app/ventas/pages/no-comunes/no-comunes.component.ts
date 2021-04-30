import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  //i18nSelect
  nombre: string = 'Leovi';
  genero: string = 'masculino';
  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino' : 'invitarla'
  }

  //i18nPlural
  clientes: string[] = ['Maria', 'Pedro', 'Leovi', 'Gabriela'];
  clientesMap = {
    '=0': 'no tenemos ningún cliente esperando',
    '1' : 'tenemos un cliente esperando',
    '2' : 'tenemos 2 clientes esperando',
    'other' : 'tenemos # clientes esperando'
  }

  cambiarPersona() {
    this.nombre = 'Gabriela';
    this.genero = 'femenino'
  }

  borrarCliente() {
    this.clientes.pop();
  }

  //KeyValue Pipe
persona = {
  nombre: 'Leovi',
  edad: 36,
  direccion: 'Xochimilco, CDMX'
}

//Json Pipe
heroes = [
  {
    nombre: 'Superman',
    vuela: true
  },
  {
    nombre: 'Robin',
    vuela: false
  },
  {
    nombre: 'Acuaman',
    vuela: false
  }
]

//Async Pipe
miObservable = interval(1000); //0,1,2,3,4

valorPromesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve( 'Tenemos data de promesa' )
  }, 3500);
});

}
