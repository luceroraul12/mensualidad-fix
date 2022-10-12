import { Servicio } from "./servicio.interface";

export interface pago {
    id: number;
    fechaPago: Date;
    pagoEfectuado: number;
    servicio: Servicio;
}