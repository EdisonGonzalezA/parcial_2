import { IPizzas } from 'src/pizzas/pizzas.interface';

export interface IIngredientes extends Document {
  nombre: string;
  pizzas: IPizzas[];
}