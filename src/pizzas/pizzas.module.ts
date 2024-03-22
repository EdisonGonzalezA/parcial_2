import { Module } from '@nestjs/common';
import { PizzasService } from './pizzas.service';
import { PizzasController } from './pizzas.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PIZZAS } from 'src/models/models';
import { PizzasSchema } from './schema/pizzas.schema';

@Module({
  imports:[
    MongooseModule.forFeatureAsync([{
      name: PIZZAS.name,
      useFactory: () => PizzasSchema,
    },
  ]),
  ],
  controllers: [PizzasController],
  providers: [PizzasService],
  exports: [PizzasService],
})
export class PizzasModule {}
