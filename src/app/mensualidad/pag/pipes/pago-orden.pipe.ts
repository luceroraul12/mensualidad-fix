import { Pipe, PipeTransform } from '@angular/core';
import { PagoDto } from 'src/app/interfaces/pago.interface';

@Pipe({
  name: 'pagoOrden'
})
export class PagoOrdenPipe implements PipeTransform {

  transform(pagos: PagoDto[]): PagoDto[] {
    return pagos.sort((a,b) => a.factura!.localeCompare(b.factura!));
  }

}
