import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PizzasModule } from './pizzas/pizzas.module';
import { IngredientesModule } from './ingredientes/ingredientes.module';
import { PedidosModule } from './pedidos/pedidos.module';
import { ClientesModule } from './clientes/clientes.module';

@Module({
  imports: [PizzasModule, IngredientesModule, PedidosModule, ClientesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
