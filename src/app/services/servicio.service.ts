import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Servicio } from '../interfaces/servicio.interface';
import { CrudService } from './crud.service';

@Injectable({
  providedIn: 'root'
})
export class ServicioService extends CrudService<Servicio> {
  public rutaEspecifica: string = "servicios";


}
