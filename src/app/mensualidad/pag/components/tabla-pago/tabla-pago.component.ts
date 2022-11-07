import { Component, OnInit } from '@angular/core';
import { Pago } from 'src/app/interfaces/pago.interface';
import { PagoService } from 'src/app/services/pago.service';

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

  public pagos!: Pago[];

  public displayedColumns: string[] = ['factura', 'fechaPago', 'pagoEfectuado', 'acciones']

  constructor(
    private pagoService: PagoService
  ) { }

  ngOnInit(): void {
    this.pagoService.leer().subscribe(
      pagosCreados => this.pagos = pagosCreados
    )
  }
}
