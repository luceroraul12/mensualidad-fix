import { Component, OnInit } from '@angular/core';
import { ComunicadorService } from 'src/app/services/comunicador.service';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styles: [
  ]
})
export class ResumenComponent implements OnInit {
  public fecha!: Date;
  constructor(
    private comunicadorService: ComunicadorService
  ) { }

  ngOnInit(): void {
    this.comunicadorService.fechaResumen$.subscribe(
      fecha => this.fecha= fecha
    )
  }

}
