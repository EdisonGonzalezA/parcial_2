import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CLIENTES } from 'src/models/models';
import { ClientesController } from './clientes.controller';
import { ClientesService } from './clientes.service';
import { ClientesSchema } from './schema/clientes.schema';

@Module({
  imports:[
    MongooseModule.forFeatureAsync([{
      name: CLIENTES.name,
      useFactory: () => ClientesSchema,
    },
  ]),
  ],
  controllers: [ClientesController],
  providers: [ClientesService],
  exports: [ClientesService],
})
export class ClientesModule {}
