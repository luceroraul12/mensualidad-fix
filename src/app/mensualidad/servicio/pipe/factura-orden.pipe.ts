import { Pipe, PipeTransform } from '@angular/core';
import { FacturaDto } from 'src/app/interfaces/servicio.interface';

@Pipe({
  name: 'facturaOrden'
})
export class FacturaOrdenPipe implements PipeTransform {

  transform(facturas: FacturaDto[]): FacturaDto[] {
    return facturas.sort((a,b) => a.nombre.localeCompare(b.nombre));
  }

}
