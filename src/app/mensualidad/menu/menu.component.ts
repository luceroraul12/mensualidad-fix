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
      ruta: "formularioServicio",
      texto: "Formulario para Servicio"
    },
    {
      ruta: "formularioPago",
      texto: "Formulario para Pago"
    },
    {
      ruta: "tablaServicio",
      texto: "Tabla para Servicio"
    },
    {
      ruta: "tablaPago",
      texto: "Tabla para Servicio"
    },
    {
      ruta: "tablaResumen",
      texto: "Tabla para Servicio"
    },
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
