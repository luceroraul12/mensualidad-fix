import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { PagoDto } from '../interfaces/pago.interface';

@Injectable({
  providedIn: 'root'
})
export class ComunicadorService {

  public fechaResumen$: BehaviorSubject<Date> = new BehaviorSubject(new Date());
  public pagosResumen$: Subject<PagoDto[]> = new Subject();

  constructor() { }
}
