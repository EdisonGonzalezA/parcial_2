import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { INGREDIENTES } from 'src/models/models';
import { IIngredientes } from './ingredientes.interface';
import { IngredientesDTO } from './dto/ingredientes.dto';

@Injectable()
export class IngredientesService {
  constructor(
    @InjectModel(INGREDIENTES.name) private readonly model: Model<IIngredientes>,
  ) {}
  insertar(ingredientesDTO: IngredientesDTO): Promise<IIngredientes> {
    const nuevoIngrediente = new this.model(ingredientesDTO);
    return nuevoIngrediente.save();
  }
  todos(): Promise<IIngredientes[]> {
    return this.model.find().populate('pizzas');
  }
  uno(id: string): Promise<IIngredientes> {
    return this.model.findById(id).populate('pizzas');
  }
  actualizar(id: string, ingredientesDTO: IngredientesDTO): Promise<IIngredientes> {
    return this.model.findByIdAndUpdate(id, ingredientesDTO, { new: true });
  }
  async eliminar(id: string) {
    await this.model.findByIdAndDelete(id);
    return { status: HttpStatus.OK, msg: 'Ingrediente eliminado' };
  }
  async insertarPizza(
    ingredientesId: string,
    pizzasId: string,
  ): Promise<IIngredientes> {
    return await this.model
      .findByIdAndUpdate(
        ingredientesId,
        { $addToSet: { pizzas: pizzasId } },
        { new: true },
      )
      .populate('pizzas');
  }
}
