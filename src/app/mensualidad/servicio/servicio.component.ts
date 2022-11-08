import { Component, OnInit } from '@angular/core';
import { Factura } from 'src/app/interfaces/servicio.interface';
import { ServicioService } from 'src/app/services/servicio.service';

@Component({
  selector: 'app-servicio',
  templateUrl: './servicio.component.html',
  styles: [
  ]
})
export class ServicioComponent implements OnInit {

  public facturas!: Factura[];

  constructor(
    private servicioService: ServicioService,
  ) { }

  ngOnInit(): void {
    this.servicioService.leer().subscribe(
      serviciosDisponibles => {
        this.facturas = serviciosDisponibles;
      }
    );
  }

}
