import { Servicio } from "./servicio.interface";

export interface Pago {
    id: number;
    fechaPago: Date;
    pagoEfectuado: number;
    servicio: Servicio;
}