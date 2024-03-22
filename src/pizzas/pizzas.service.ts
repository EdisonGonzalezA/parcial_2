import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PIZZAS } from 'src/models/models';
import { Model } from 'mongoose';
import { IPizzas } from './pizzas.interface';
import { PizzasDTO } from './dto/pizzas.dto';

@Injectable()
export class PizzasService {
  constructor(
    @InjectModel(PIZZAS.name) private readonly model: Model<IPizzas>,
  ) {}

  async insertar(pizzasDTO: PizzasDTO): Promise<IPizzas> {
    const newPizzas = new this.model(pizzasDTO);
    return await newPizzas.save();
  }
  async todos(): Promise<IPizzas[]> {
    return await this.model.find();
  }
  async uno(id: string): Promise<IPizzas> {
    return await this.model.findById(id);
  }
  async actualizar(
    id: string,
    pizzasDTO: PizzasDTO,
  ): Promise<IPizzas> {
    return await this.model.findByIdAndUpdate(id, pizzasDTO, { new: true });
  }
  async eliminar(id: string) {
    await this.model.findByIdAndDelete(id);
    return { status: HttpStatus.OK, message: 'Eliminado' };
  }
}
