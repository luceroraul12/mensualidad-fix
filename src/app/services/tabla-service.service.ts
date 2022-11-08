import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { InformacionFormularioTabla } from '../interfaces/informacionFormularioTabla.interface';
import { Factura } from '../interfaces/servicio.interface';

@Injectable({
  providedIn: 'root'
})
export class TablaServiceService<Entidad> {

  public comunicadorFormularioTabla$: Subject<InformacionFormularioTabla<Entidad>> = new Subject();

  private tabla!: Entidad[];

  public set setTabla(tabla: Entidad[]){
    this.tabla = tabla;
  }

  constructor() { }

  agregar(elemento: Entidad):Entidad[] {
      this.tabla?.push(elemento);
      return this.tabla;
  }

  quitar(elemento: Entidad):Entidad[]{
    let index = this.tabla.indexOf(elemento);
    console.log(this.tabla);
    
    this.tabla = this.tabla.splice(index,1);
    console.log(this.tabla);

    return this.tabla;
  } 
}
