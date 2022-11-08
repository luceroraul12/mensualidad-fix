import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Actividad } from 'src/app/interfaces/informacionFormularioTabla.interface';
import { Pago } from 'src/app/interfaces/pago.interface';
import { PagoService } from 'src/app/services/pago.service';
import { TablaServiceService } from 'src/app/services/tabla-service.service';

@Component({
  selector: 'app-tabla-pago',
  templateUrl: './tabla-pago.component.html',
  styles: [
    `
      table{
        width: 100%
      }
    `
  ]
})
export class TablaPagoComponent implements OnInit {

  @Input() pagos!: Pago[];
  @Output() eliminarPagoEspecifico: EventEmitter<Pago> = new EventEmitter();

  public displayedColumns: string[] = ['factura', 'fechaPago', 'pagoEfectuado', 'acciones']

  constructor(
    private pagoService: PagoService,
    private tablaService: TablaServiceService<Pago>
  ) { }

  ngOnInit(): void {
    this.tablaService.comunicadorFormularioTabla$.subscribe(
      ({actividad, elemento}) => {
        if(actividad == Actividad.CREAR){
          console.log("es para agregar");
          this.pagos = [...this.pagos, elemento];
        } else {
          console.log("es para quitar");
          this.pagos = this.pagos.filter(({id}) => id != elemento.id);
        }
      },
    );
  }


  eliminar(pago: Pago){
    this.pagoService.eliminar(pago).subscribe(
      respuesta => {
        console.log("servicio eliminado");
        this.tablaService.comunicadorFormularioTabla$.next({
          actividad: Actividad.ELIMINAR,
          elemento: pago
        });
      }
      );
    this.eliminarPagoEspecifico.emit(pago);
  }
}
