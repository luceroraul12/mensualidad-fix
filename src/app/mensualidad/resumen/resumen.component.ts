import { Component, OnInit } from '@angular/core';
import { Pago } from 'src/app/interfaces/pago.interface';
import { Factura } from 'src/app/interfaces/servicio.interface';
import { ComunicadorService } from 'src/app/services/comunicador.service';
import { PagoService } from 'src/app/services/pago.service';
import { ServicioService } from 'src/app/services/servicio.service';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styles: [
  ]
})
export class ResumenComponent implements OnInit {

  public fechaElegida!: Date;;

  public facturasPagadas!: Factura[];
  public facturasSinPagar!: Factura[];
  public pagosRealizados!: Pago[];

  constructor(
    private comunicadorService: ComunicadorService,
    private facturaService: ServicioService,
    private pagoService: PagoService
  ) { }

  ngOnInit(): void {
    this.fechaElegida = new Date(Date.now());
    this.comunicadorService.fechaResumen$.subscribe(
      fecha => this.fechaElegida = fecha
    )
    this.pagoService.obtenerResumen(this.fechaElegida.getMonth()+1,this.fechaElegida.getFullYear()).subscribe(
      pagosRealizados => {
        this.pagosRealizados = pagosRealizados;
        console.log(pagosRealizados);
        
      }
    )
  }

}
