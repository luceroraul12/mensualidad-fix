import { Pipe, PipeTransform } from '@angular/core';
import { Factura } from 'src/app/interfaces/servicio.interface';

@Pipe({
  name: 'facturaOrden'
})
export class FacturaOrdenPipe implements PipeTransform {

  transform(facturas: Factura[]): Factura[] {
    return facturas.sort((a,b) => a.nombre.localeCompare(b.nombre));
  }

}
