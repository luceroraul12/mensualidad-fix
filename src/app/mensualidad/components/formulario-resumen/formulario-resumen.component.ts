import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ComunicadorService } from 'src/app/services/comunicador.service';

@Component({
  selector: 'app-formulario-resumen',
  templateUrl: './formulario-resumen.component.html',
  styles: []
})
export class FormularioResumenComponent implements OnInit {

  @ViewChild('formResumen') formulario!: NgForm;

  constructor(
    private comunicadorService: ComunicadorService
  ) { }

  ngOnInit(): void {
  }

  cargar(): void {
    this.comunicadorService.fechaResumen$.next(
      this.formulario.controls['fechaPago'].value
    )
  }

}
