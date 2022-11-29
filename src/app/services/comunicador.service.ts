import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Pago } from '../interfaces/pago.interface';

@Injectable({
  providedIn: 'root'
})
export class ComunicadorService {

  public fechaResumen$: BehaviorSubject<Date> = new BehaviorSubject(new Date());
  public pagosResumen$: Subject<Pago[]> = new Subject();

  constructor() { }
}
