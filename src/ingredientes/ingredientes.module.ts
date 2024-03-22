import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { INGREDIENTES } from 'src/models/models';
import { IngredientesSchema } from './schema/ingredientes.schema';
import { IngredientesService } from './ingredientes.service';
import { IngredientesController } from './ingredientes.controller';
import { PizzasModule } from 'src/pizzas/pizzas.module';


@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: INGREDIENTES.name,
        useFactory: () => IngredientesSchema.plugin(require('mongoose-autopopulate')),
      },
    ]),
    PizzasModule,
  ],
  controllers: [IngredientesController],
  providers: [IngredientesService],
})
export class IngredientesModule {}
