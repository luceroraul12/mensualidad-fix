import { Component, OnInit } from '@angular/core';



interface Pago {
  servicio: string;
  fechaPago: Date;
  pagoRealizado: number;
}

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

  public pagos: Pago[] = [
    {servicio: 'movistar', pagoRealizado: 123345.35, fechaPago: new Date()},
    {servicio: 'movistar', pagoRealizado: 123345.35, fechaPago: new Date()},
    {servicio: 'movistar', pagoRealizado: 123345.35, fechaPago: new Date()},
    {servicio: 'movistar', pagoRealizado: 123345.35, fechaPago: new Date()},
    {servicio: 'movistar', pagoRealizado: 123345.35, fechaPago: new Date()},
    {servicio: 'movistar', pagoRealizado: 123345.35, fechaPago: new Date()},
  ];

  public displayedColumns: string[] = ['servicio', 'fechaPago', 'pagoRealizado']

  constructor() { }

  ngOnInit(): void {
  }

}
