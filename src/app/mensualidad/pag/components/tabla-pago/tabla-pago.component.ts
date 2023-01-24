import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { Actividad } from 'src/app/interfaces/informacionFormularioTabla.interface';
import { PagoDto } from 'src/app/interfaces/pago.interface';
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

  @Input() pagos!: PagoDto[];
  @Output() eliminarPagoEspecifico: EventEmitter<PagoDto> = new EventEmitter();

  @ViewChild("tabla") public tabla!: MatTable<PagoDto>;

  public displayedColumns: string[] = ['factura', 'fechaPago', 'pagoEfectuado', 'acciones']

  constructor(
    private pagoService: PagoService,
    private tablaService: TablaServiceService<PagoDto>,
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


  eliminar(pago: PagoDto){
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

  modificar(pago: PagoDto): void {
    let esVer: boolean = false;
    this.dialog.open(PagDialogComponent, {data: {pago, esVer}});
  }

  ver(pago: PagoDto): void {
    let esVer: boolean = true;
    this.dialog.open(PagDialogComponent, {data: {
      pago,
      esVer
    }});
  }

  tieneComentario(pago: PagoDto): boolean{
    let resultado: boolean = false;
    try{
      resultado = pago.comentario!.length > 1;
    } catch {
      
    }
    return resultado;
  }
}
