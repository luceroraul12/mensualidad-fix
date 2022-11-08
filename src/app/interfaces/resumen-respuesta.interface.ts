import { Pago } from "./pago.interface";
import { Factura } from "./servicio.interface";

export interface ResumenRespuesta {
    facturasPagadas: Factura[];
    facturasImpagas: Factura[];
    pagosRealizados: Pago[];
}

