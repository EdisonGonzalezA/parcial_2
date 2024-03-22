import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CLIENTES } from 'src/models/models';
import { Model } from 'mongoose';
import { IClientes } from './clientes.interface';
import { ClientesDTO } from './dto/clientes.dto';

@Injectable()
export class ClientesService {
  constructor(
    @InjectModel(CLIENTES.name) private readonly model: Model<IClientes>,
  ) {}

  async insertar(clientesDTO: ClientesDTO): Promise<IClientes> {
    const newClientes = new this.model(clientesDTO);
    return await newClientes.save();
  }
  async todos(): Promise<IClientes[]> {
    return await this.model.find();
  }
  async uno(id: string): Promise<IClientes> {
    return await this.model.findById(id);
  }
  async actualizar(
    id: string,
    clientesDTO: ClientesDTO,
  ): Promise<IClientes> {
    return await this.model.findByIdAndUpdate(id, clientesDTO, { new: true });
  }
  async eliminar(id: string) {
    await this.model.findByIdAndDelete(id);
    return { status: HttpStatus.OK, message: 'Eliminado' };
  }
}