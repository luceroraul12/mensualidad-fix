import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Modelo } from '../interfaces/entidad.interface';
import { InformacionFormularioTabla } from '../interfaces/informacionFormularioTabla.interface';

@Injectable({
  providedIn: 'root'
})
export class TablaServiceService<Entidad extends Modelo> {

  public comunicadorFormularioTabla$: Subject<InformacionFormularioTabla<Entidad>> = new Subject();

  constructor() { }

  agregar(elemento: Entidad, elementos: Entidad[]):Entidad[]{
      elementos.push(elemento);
      return elementos;
  }

  quitar(elemento: Entidad, elementos: Entidad[]):Entidad[]{
    elementos = elementos.filter(({id})=> id != elemento.id);
    return elementos;
  }
  mdoificar(elemento: Entidad, elementos: Entidad[]): Entidad[]{
    elementos = elementos.map((e) => e.id == elemento.id ? elemento : e);
    return elementos;
  }
}
