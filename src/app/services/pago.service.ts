import { Injectable } from '@angular/core';
import { Pago } from '../interfaces/pago.interface';
import { CrudService } from './crud.service';

@Injectable({
  providedIn: 'root'
})
export class PagoService extends CrudService<Pago>{
  public rutaEspecifica: string = "pagos";

}
