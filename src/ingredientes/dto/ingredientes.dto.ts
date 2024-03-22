import { IsDate, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class IngredientesDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly nombre: string;
}