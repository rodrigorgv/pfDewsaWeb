import { Component } from '@angular/core';

@Component({
  selector: 'app-barra-navegacion',
  templateUrl: './barra-navegacion.component.html',
  styleUrls: ['./barra-navegacion.component.css']
})
export class BarraNavegacionComponent {
  list = [
    {
      number: '1',
      name: 'Cliente',
      icon: 'fa-solid fa-house',
    },
    {
      number: '2',
      name: 'Productos',
      icon: 'fa-solid fa-house',
    }
  ]

}
