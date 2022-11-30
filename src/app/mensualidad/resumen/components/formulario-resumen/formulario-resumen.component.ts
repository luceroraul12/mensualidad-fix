import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { map, mergeMap, Subscriber, Subscription } from 'rxjs';
import { ComunicadorService } from 'src/app/services/comunicador.service';
import { PagoService } from 'src/app/services/pago.service';

@Component({
  selector: 'app-formulario-resumen',
  templateUrl: './formulario-resumen.component.html',
  styles: []
})
export class FormularioResumenComponent implements OnInit, OnDestroy {

  public total!: number;
  private sub!: Subscription;

  @ViewChild('formResumen') formulario!: NgForm;

  constructor(
    private comunicadorService: ComunicadorService,
  ) { }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  ngOnInit(): void {
    this.sub = this.comunicadorService.pagosResumen$.subscribe(
      pagos => {
        this.total = pagos
                        .map(({pago}) => pago)
                        .reduce((p1,p2) => p1! + p2!, 0)!
      }
    )
  }

  cargar(): void {
    this.comunicadorService.fechaResumen$.next(
      this.formulario.controls['fechaPago'].value
    )
  }

}
