import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PorcentajeUsuariosFacturas } from '../interfaces/porcentaje-usuarios-facturas.interface';
import { CrudService } from './crud.service';

@Injectable({
  providedIn: 'root'
})
export class PorcentajeUsuariosFacturasService extends CrudService<PorcentajeUsuariosFacturas> {
  public override rutaEspecifica: string = "porcentaje-usuarios-facturas";
}
