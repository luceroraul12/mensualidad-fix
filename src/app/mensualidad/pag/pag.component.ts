import { Component, OnInit } from '@angular/core';
import { PagoDto } from 'src/app/interfaces/pago.interface';
import { ComunicadorService } from 'src/app/services/comunicador.service';
import { PagoService } from 'src/app/services/pago.service';

@Component({
  selector: 'app-pago',
  templateUrl: './pag.component.html',
  styles: [
  ]
})
export class PagComponent implements OnInit {

  public pagos!: PagoDto[];

  constructor(
    private pagoService: PagoService,
    private comunicadorService: ComunicadorService
  ) { }

  ngOnInit(): void {
    this.pagoService.leer().subscribe(
      pagosCreados => this.pagos = pagosCreados
    );
    this.comunicadorService.fechaResumen$.next(new Date());
  }

}
