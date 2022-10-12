import { Component, OnInit } from '@angular/core';
import { Servicio } from 'src/app/interfaces/servicio.interface';
import { ServicioService } from 'src/app/services/servicio.service';

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

  public servicios!: Servicio[];

  public displayedColumns: string[] = ['servicio', 'url'];

  constructor(
    private servicioService: ServicioService
  ) { }

  ngOnInit(): void {
    this.servicioService.leer().subscribe(
      serviciosDisponibles => this.servicios = serviciosDisponibles
    )
  }

}
