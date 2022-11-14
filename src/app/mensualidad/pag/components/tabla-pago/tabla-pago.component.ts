import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { Actividad } from 'src/app/interfaces/informacionFormularioTabla.interface';
import { Pago } from 'src/app/interfaces/pago.interface';
import { PagoService } from 'src/app/services/pago.service';
import { TablaServiceService } from 'src/app/services/tabla-service.service';
import { PagDialogComponent } from '../pag-dialog/pag-dialog.component';

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

  @ViewChild("tabla") public tabla!: MatTable<Pago>;

  public displayedColumns: string[] = ['factura', 'fechaPago', 'pagoEfectuado', 'acciones']

  constructor(
    private pagoService: PagoService,
    private tablaService: TablaServiceService<Pago>,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.tablaService.comunicadorFormularioTabla$.subscribe(
      ({actividad, elemento}) => {
        switch(actividad){
          case Actividad.CREAR:{
            this.pagos = this.tablaService.agregar(elemento, this.pagos);
            this.tabla.renderRows();
            break
          };
          case Actividad.MODIFICAR:{
            this.pagos = this.tablaService.mdoificar(elemento, this.pagos);
            this.tabla.renderRows();
            break;
          };
          case Actividad.ELIMINAR:{
            this.pagos = this.tablaService.quitar(elemento, this.pagos);
            this.tabla.renderRows();
            break;
          }
        }
      }
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

  modificar(pago: Pago): void {
    this.dialog.open(PagDialogComponent, {data: pago});
  }
}
