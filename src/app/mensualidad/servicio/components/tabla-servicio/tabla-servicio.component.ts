import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Actividad } from 'src/app/interfaces/informacionFormularioTabla.interface';
import { Factura } from 'src/app/interfaces/servicio.interface';
import { ServicioService } from 'src/app/services/servicio.service';
import { TablaServiceService } from 'src/app/services/tabla-service.service';
import { ServicioDialogTablaFormularioComponent } from '../servicio-dialog-tabla-formulario/servicio-dialog-tabla-formulario.component';

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
export class TablaServicioComponent implements OnInit, OnDestroy {

  private subscription!: Subscription;


  public displayedColumns: string[] = ['servicio', 'url','acciones'];
  public displayedColumnsSinUrl: string[] = ['servicio'];

  @Input() mostrarEnlace: boolean = false;
  @Input() esRenglonClick: boolean = false;
  @Input() tituloPersonalizado: string = "Servicio";
  @Input() servicios: Factura[] = [];

  @Output() renglonClickeado: EventEmitter<Factura> = new EventEmitter();

  @ViewChild("tabla") public tabla!: MatTable<Factura>;


  constructor(
    // TODO: ver como arreglar lo de tablaService por que no no me deja hacer las operaciones de la tabla desde el service y no desde el componente
    private tablaService: TablaServiceService<Factura>,
    private servicioService: ServicioService,
    private dialog: MatDialog,
  ) { }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    
    this.subscription = this.tablaService.comunicadorFormularioTabla$.subscribe(
      ({actividad, elemento}) => {
        switch(actividad){
          case Actividad.CREAR:{
            this.servicios = this.tablaService.agregar(elemento, this.servicios);
            this.tabla.renderRows();
            break;
          };
          case Actividad.ELIMINAR:{
            this.servicios = this.tablaService.quitar(elemento, this.servicios);
            this.tabla.renderRows();
            break;
          }
          case Actividad.MODIFICAR:{
            // this.servicios.map((e) => e.id == elemento.id ? elemento : e);
            // this.servicios = [...this.servicios];
            this.servicios = this.tablaService.mdoificar(elemento, this.servicios);
            break;
          }
        }
      },
    );
  }

  eliminar(factura: Factura){
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

  clickearRenglon(factura: Factura):void {
    if(this.esRenglonClick){
      this.renglonClickeado.emit(factura);
    console.log('clickeado', factura);
    }
  }

  dialogModificar(factura: Factura){
    this.dialog.open(ServicioDialogTablaFormularioComponent, {data: {...factura}});
  }

}
