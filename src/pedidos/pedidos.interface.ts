import { IClientes } from 'src/clientes/clientes.interface';
import { IPizzas } from 'src/pizzas/pizzas.interface';

export interface IPedidos extends Document {
  Fecha_Pedido: Date;
  pizzas : IPizzas[];
  clientes : IClientes[];
}