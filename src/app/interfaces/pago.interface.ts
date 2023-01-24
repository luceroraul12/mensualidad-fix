import { Modelo } from "./entidad.interface";

export interface PagoDto extends Modelo {
    id?: number;
    idFactura?: number;
    fechaDePago?: Date;
    pago?: number;
    factura?: string;
    urlFactura?: string;
    comentario?: string;
}