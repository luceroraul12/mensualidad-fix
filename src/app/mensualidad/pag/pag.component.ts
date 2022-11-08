import { Component, OnInit } from '@angular/core';
import { Pago } from 'src/app/interfaces/pago.interface';
import { PagoService } from 'src/app/services/pago.service';

@Component({
  selector: 'app-pago',
  templateUrl: './pag.component.html',
  styles: [
  ]
})
export class PagComponent implements OnInit {

  public pagos!: Pago[];

  constructor(
    private pagoService: PagoService
  ) { }

  ngOnInit(): void {
    this.pagoService.leer().subscribe(
      pagosCreados => this.pagos = pagosCreados
    );
  }

}
