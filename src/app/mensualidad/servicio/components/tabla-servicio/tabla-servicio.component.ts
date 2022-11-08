import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Actividad } from 'src/app/interfaces/informacionFormularioTabla.interface';
import { Factura } from 'src/app/interfaces/servicio.interface';
import { ServicioService } from 'src/app/services/servicio.service';
import { TablaServiceService } from 'src/app/services/tabla-service.service';

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

  public servicios: Factura[] = [];

  public displayedColumns: string[] = ['servicio', 'url','acciones'];
  public displayedColumnsSinUrl: string[] = ['servicio'];

  @Input() mostrarEnlace: boolean = false;
  @Input() tituloPersonalizado: string = "Servicio";

  constructor(
    // TODO: ver como arreglar lo de tablaService por que no no me deja hacer las operaciones de la tabla desde el service y no desde el componente
    private servicioService: ServicioService,
    private tablaService: TablaServiceService<Factura>
  ) { }

  ngOnInit(): void {
    this.servicioService.leer().subscribe(
      serviciosDisponibles => {
        this.servicios = serviciosDisponibles;
      }
    );
    this.tablaService.comunicadorFormularioTabla$.subscribe(
      ({actividad, elemento}) => {
        if(actividad == Actividad.CREAR){
          console.log("es para agregar");
          this.servicios = [...this.servicios, elemento];
        } else {
          console.log("es para quitar");
          this.servicios = this.servicios.filter(({id}) => id != elemento.id);
        }
      }
    );
  }

  eliminar(factura: Factura){
    console.log(this.servicios);
    
    this.servicioService.eliminar(factura).subscribe(
      respuesta => {
        console.log("servicio eliminado");
        this.tablaService.comunicadorFormularioTabla$.next({
          actividad: Actividad.ELIMINAR,
          elemento: factura
        });
      }
      );
    
  }

}
