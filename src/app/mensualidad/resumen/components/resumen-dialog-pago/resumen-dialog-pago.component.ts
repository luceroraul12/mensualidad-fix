import { Component, Input, OnInit } from '@angular/core';
import { Factura } from 'src/app/interfaces/servicio.interface';

@Component({
  selector: 'app-resumen-dialog-pago',
  templateUrl: './resumen-dialog-pago.component.html',
  styleUrls: ['./resumen-dialog-pago.component.css']
})
export class ResumenDialogPagoComponent implements OnInit {

  @Input() facturaSeleccionada!: Factura;

  constructor() { }

  ngOnInit(): void {
  }


}
