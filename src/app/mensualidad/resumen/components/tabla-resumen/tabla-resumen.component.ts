import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { first } from 'rxjs';
import { Pago } from 'src/app/interfaces/pago.interface';
import { Factura } from 'src/app/interfaces/servicio.interface';
import { ComunicadorService } from 'src/app/services/comunicador.service';
import { PagoService } from 'src/app/services/pago.service';
import { ResumenService } from 'src/app/services/resumen.service';
import { TablaServiceService } from 'src/app/services/tabla-service.service';
import { ResumenDialogPagoComponent } from '../resumen-dialog-pago/resumen-dialog-pago.component';

@Component({
  selector: 'app-tabla-resumen',
  templateUrl: './tabla-resumen.component.html',
  styles: [
  ]
})
export class TablaResumenComponent implements OnInit {

  public fechaElegida!: Date;;

  public facturasPagadas!: Factura[];
  public facturasSinPagar!: Factura[];
  public pagosRealizados!: Pago[];

  constructor(
    private comunicadorService: ComunicadorService,
    private resumenService: ResumenService,
    private tablaService: TablaServiceService<Pago>,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.fechaElegida = new Date(Date.now());
    this.comunicadorService.fechaResumen$.subscribe(
      fecha => {
        this.fechaElegida = fecha;
        this.traerTodosLosPagosDelBackend();
      }
    )
    this.tablaService.comunicadorFormularioTabla$.subscribe(
      ({elemento}) => {
        this.recuperarFacturaPagada(elemento);
      } 
    )
  }

  recuperarFacturaPagada(pago: Pago):void{
    console.log(pago);
    this.facturasPagadas = this.resumenService.verificarExistenciaFacturaAgregar(pago, this.facturasPagadas);
    this.facturasSinPagar = this.resumenService.verificarExistenciaFacturaAgregar(pago, this.facturasSinPagar);
  }

  abrirFromularioPago(facturaSeleccionada: Factura): void {
    this.dialog.open(ResumenDialogPagoComponent,{data: facturaSeleccionada})
  }
  traerTodosLosPagosDelBackend():void  {
    this.resumenService.obtenerResumenMesAnio(this.fechaElegida.getMonth()+1,this.fechaElegida.getFullYear())
    .pipe(first())
    .subscribe(
      ({facturasImpagas,facturasPagadas,pagosRealizados}) => {
        this.facturasPagadas = facturasPagadas;
        this.facturasSinPagar = facturasImpagas;
        this.pagosRealizados = pagosRealizados;
      }
    )
  }
}


