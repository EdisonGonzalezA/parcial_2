import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PEDIDOS } from 'src/models/models';
import { IPedidos } from './pedidos.interface';
import { PedidosDTO } from './dto/pedidos.dto';

@Injectable()
export class PedidosService {
  constructor(
    @InjectModel(PEDIDOS.name) private readonly model: Model<IPedidos>,
  ) {}
  insertar(pedidosDTO: PedidosDTO): Promise<IPedidos> {
    const nuevoPedido = new this.model(pedidosDTO);
    return nuevoPedido.save();
  }
  todos(): Promise<IPedidos[]> {
    return this.model.find().populate('pizzas').populate('clientes');
  }
  uno(id: string): Promise<IPedidos> {
    return this.model.findById(id).populate('pizzas').populate('clientes');
  }
  actualizar(id: string, pedidosDTO: PedidosDTO): Promise<IPedidos> {
    return this.model.findByIdAndUpdate(id, pedidosDTO, { new: true });
  }
  async eliminar(id: string) {
    await this.model.findByIdAndDelete(id);
    return { status: HttpStatus.OK, msg: 'Pedido eliminado' };
  }
  async insertarPizza(
    pedidosId: string,
    pizzasId: string,
  ): Promise<IPedidos> {
    return await this.model
      .findByIdAndUpdate(
        pedidosId,
        { $addToSet: { pizzas: pizzasId } },
        { new: true },
      )
      .populate('pizzas');
  }
  async insertarCliente(
    pedidosId: string,
    clientesId: string,
  ): Promise<IPedidos> {
    return await this.model
      .findByIdAndUpdate(
        pedidosId,
        { $addToSet: { clientes: clientesId } },
        { new: true },
      )
      .populate('clientes');
  }
}
