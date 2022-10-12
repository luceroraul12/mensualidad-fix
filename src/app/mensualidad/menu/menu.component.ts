import { Component, OnInit } from '@angular/core';


interface MenuItem {
  texto: string;
  ruta: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: []
})
export class MenuComponent implements OnInit {

  public rutasComponentes: MenuItem[] = [
    {
      ruta: "servicios",
      texto: "Servicios"
    },
    {
      ruta: "pagos",
      texto: "Pagos"
    },
    {
      ruta: "resumenes",
      texto: "Resumenes"
    },
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
