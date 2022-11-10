export interface InformacionFormularioTabla<Entidad>{
    elemento: Entidad;
    actividad: Actividad;
}

export enum Actividad {
    CREAR, ELIMINAR, MODIFICAR
}