import { Pipe, PipeTransform } from '@angular/core';
import { Pago } from 'src/app/interfaces/pago.interface';

@Pipe({
  name: 'pagoOrden'
})
export class PagoOrdenPipe implements PipeTransform {

  transform(pagos: Pago[]): Pago[] {
    return pagos.sort((a,b) => a.factura.nombre.localeCompare(b.factura.nombre));
  }

}
