import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower : string = 'leovi';
  nombreUpper : string = 'LEOVI';
  nombreCompleto: string = 'lEoVi MaRtInEz';


  fecha: Date = new Date();


}
