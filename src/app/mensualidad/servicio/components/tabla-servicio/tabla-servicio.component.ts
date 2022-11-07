import { Component, Input, OnInit } from '@angular/core';
import { Factura } from 'src/app/interfaces/servicio.interface';
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

  public servicios!: Factura[];

  public displayedColumns: string[] = ['servicio', 'url','acciones'];
  public displayedColumnsSinUrl: string[] = ['servicio'];

  @Input() mostrarEnlace: boolean = false;
  @Input() tituloPersonalizado: string = "Servicio";

  constructor(
    private servicioService: ServicioService
  ) { }

  ngOnInit(): void {
    this.servicioService.leer().subscribe(
      serviciosDisponibles => this.servicios = serviciosDisponibles
    )
  }

  eliminar(factura: Factura){
    this.servicioService.eliminar(factura).subscribe(
      respuesta => console.log("servicio eliminado")
      
    )
  }

}
