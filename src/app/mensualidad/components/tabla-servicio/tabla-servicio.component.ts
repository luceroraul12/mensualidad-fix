import { Component, OnInit } from '@angular/core';

interface Servicio {
  nombre: string,
  url: string,
}

@Component({
  selector: 'app-tabla-servicio',
  templateUrl: './tabla-servicio.component.html',
  styles: [
    `
    .demo-table {
  width: 100%;
}
    
    `

  ]
})
export class TablaServicioComponent implements OnInit {

  public servicios: Servicio[]= [
    {nombre:'movistar', url:'www.movistar.com'},
    {nombre:'rovistar', url:'www.rovistar.com'},
    {nombre:'ribeiro', url:'www.ribeiro.com'},
    {nombre:'carrefour', url:'www.carrefour.com'},
    {nombre:'supercanal', url:'www.supercanal.com'},
  ]

  public displayedColumns: string[] = ['nombre', 'url'];

  constructor() { }

  ngOnInit(): void {
  }

}
