import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { IngredientesService } from './ingredientes.service';
import { PizzasService } from 'src/pizzas/pizzas.service';
import { IngredientesDTO } from './dto/ingredientes.dto';

  @ApiTags('ingredientes')
  @Controller('api/v1/ingredientes')
  export class IngredientesController {
    constructor(
      private readonly ingredientesService: IngredientesService,
      private readonly pizzasService: PizzasService,
    ) {}
    @Post()
    @ApiOperation({ summary: 'Crea Ingredientes' })
    insertar(@Body() ingredientesDTO: IngredientesDTO) {
      return this.ingredientesService.insertar(ingredientesDTO);
    }
    @Get()
    @ApiOperation({ summary: 'Selecciona todos los Ingredientes' })
    todos() {
      return this.ingredientesService.todos();
    }
    @Get(':id')
    uno(@Param('id') id: string) {
      return this.ingredientesService.uno(id);
    }
    @Put(':id')
    actualizar(@Param('id') id: string, @Body() ingredientesDTO: IngredientesDTO) {
      return this.ingredientesService.actualizar(id, ingredientesDTO);
    }
    @Delete(':id')
    eliminar(@Param('id') id: string) {
      return this.ingredientesService.eliminar(id);
    }
    @Post(':ingredientesId/pizzas/:pizzasId')
    async agregarPizzas(
      @Param('ingredientesId') ingredientesId: string,
      @Param('pizzasId') pizzasId: string,
    ) {
      const pizzas = await this.pizzasService.uno(pizzasId);
      if (!pizzas)
        throw new HttpException('Passenger not found', HttpStatus.NOT_FOUND);
      return this.ingredientesService.insertarPizza(ingredientesId, pizzasId);
    }
  }
