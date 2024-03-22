import {Body, Controller, Delete, Get, Param, Post, Put,} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PizzasService } from './pizzas.service';
import { PizzasDTO } from './dto/pizzas.dto';

  @ApiTags('pizzas')
  @Controller('api/v1/pizzas')
  export class PizzasController {
    constructor(private readonly pizzasService: PizzasService) {}
  
    @Post()
    insertar(@Body() pizzasDTO: PizzasDTO) {
      return this.pizzasService.insertar(pizzasDTO);
    }
    @Get()
    todos() {
      return this.pizzasService.todos();
    }
    @Get(':id')
    uno(@Param('id') id: string) {
      return this.pizzasService.uno(id);
    }
    @Put(':id')
    actualizar(@Param('id') id: string, @Body() pizzasDTO: PizzasDTO) {
      return this.pizzasService.actualizar(id, pizzasDTO);
    }
    @Delete(':id')
    eliminar(@Param('id') id: string) {
      return this.pizzasService.eliminar(id);
    }
  }
