import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { PedidosService } from './pedidos.service';
import { PizzasService } from 'src/pizzas/pizzas.service';
import { ClientesService } from 'src/clientes/clientes.service';
import { PedidosDTO } from './dto/pedidos.dto';

  @ApiTags('pedidos')
  @Controller('api/v1/pedidos')
  export class PedidosController {
    constructor(
      private readonly pedidosService: PedidosService,
      private readonly pizzasService: PizzasService,
      private readonly clientesService: ClientesService,
    ) {}
    @Post()
    @ApiOperation({ summary: 'Crea Pedidos' })
    insertar(@Body() pedidosDTO: PedidosDTO) {
      return this.pedidosService.insertar(pedidosDTO);
    }
    @Get()
    @ApiOperation({ summary: 'Selecciona todos los Pedidos' })
    todos() {
      return this.pedidosService.todos();
    }
    @Get(':id')
    uno(@Param('id') id: string) {
      return this.pedidosService.uno(id);
    }
    @Put(':id')
    actualizar(@Param('id') id: string, @Body() pedidosDTO: PedidosDTO) {
      return this.pedidosService.actualizar(id, pedidosDTO);
    }
    @Delete(':id')
    eliminar(@Param('id') id: string) {
      return this.pedidosService.eliminar(id);
    }
    @Post(':pedidosId/pizzas/:pizzasId')
    async agregarPizzas(
      @Param('pedidosId') pedidosId: string,
      @Param('pizzasId') pizzasId: string,
    ) {
      const pizzas = await this.pizzasService.uno(pizzasId);
      if (!pizzas)
        throw new HttpException('Pizzas not found', HttpStatus.NOT_FOUND);
      return this.pedidosService.insertarPizza(pedidosId, pizzasId);
    }
    @Post(':pedidosId/clientes/:clientesId')
    async agregarClientes(
      @Param('pedidosId') pedidosId: string,
      @Param('clientesId') clientesId: string,
    ) {
      const clientes = await this.clientesService.uno(clientesId);
      if (!clientes)
        throw new HttpException('Clientes not found', HttpStatus.NOT_FOUND);
      return this.pedidosService.insertarCliente(pedidosId, clientesId);
    }
  }