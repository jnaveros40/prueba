import {Entity, model, property} from '@loopback/repository';

@model()
export class Ruta extends Entity {

  constructor(data?: Partial<Ruta>) {
    super(data);
  }
}

export interface RutaRelations {
  // describe navigational properties here
}

export type RutaWithRelations = Ruta & RutaRelations;
