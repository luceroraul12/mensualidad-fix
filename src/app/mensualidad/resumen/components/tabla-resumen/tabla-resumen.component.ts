import { Component, OnInit } from '@angular/core';
import { Pago } from 'src/app/interfaces/pago.interface';
import { Factura } from 'src/app/interfaces/servicio.interface';
import { ComunicadorService } from 'src/app/services/comunicador.service';
import { ResumenService } from 'src/app/services/resumen.service';

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
    private resumenService: ResumenService
  ) { }

  ngOnInit(): void {
    this.fechaElegida = new Date(Date.now());
    this.comunicadorService.fechaResumen$.subscribe(
      fecha => this.fechaElegida = fecha
    )
    this.resumenService.obtenerResumenMesAnio(this.fechaElegida.getMonth()+1,this.fechaElegida.getFullYear()).subscribe(
      ({facturasImpagas,facturasPagadas,pagosRealizados}) => {
        this.facturasPagadas = facturasPagadas;
        this.facturasSinPagar = facturasImpagas;
        this.pagosRealizados = pagosRealizados;
      }
    )
  }

  recuperarPago(pago: Pago):void{
    console.log(pago);
    this.facturasPagadas = this.resumenService.verificarExistenciaFacturaAgregar(pago, this.facturasPagadas);
    this.facturasSinPagar = this.resumenService.verificarExistenciaFacturaAgregar(pago, this.facturasSinPagar);
  }

}
