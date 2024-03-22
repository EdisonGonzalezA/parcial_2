import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PedidosController } from './pedidos.controller';
import { PedidosService } from './pedidos.service';
import { ClientesModule } from 'src/clientes/clientes.module';
import { PizzasModule } from 'src/pizzas/pizzas.module';
import { PedidosSchema } from './schema/pedidos.schema';
import { PEDIDOS } from 'src/models/models';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: PEDIDOS.name,
        useFactory: () => PedidosSchema.plugin(require('mongoose-autopopulate')),
      },
    ]),
    PizzasModule,
    ClientesModule,
  ],
  controllers: [PedidosController],
  providers: [PedidosService],
})
export class PedidosModule {}
