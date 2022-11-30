import { Component, OnInit } from '@angular/core';


interface MenuItem {
  texto: string;
  ruta: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [`
    .menu{
      position: sticky;
      top: 0;
      z-index: 1;
    }
    .contenido{
      z-index: 2;
    }
  `]
})
export class MenuComponent implements OnInit {

  public rutaSeleccionada: MenuItem = {
    ruta: "resumenes",
    texto: "Resumenes"
  };

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

  seleccionarRuta(ruta: MenuItem): void{
    this.rutaSeleccionada = ruta;
  }
}
