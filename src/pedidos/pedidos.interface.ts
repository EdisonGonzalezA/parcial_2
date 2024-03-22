import { IClientes } from 'src/clientes/clientes.interface';
import { IPizzas } from 'src/pizzas/pizzas.interface';

export interface IPedidos extends Document {
  Fecha_Pedido: Date;
  ID_Pizza : IPizzas[];
  ID_Cliente : IClientes[];
}