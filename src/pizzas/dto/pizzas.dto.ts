import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class PizzasDTO {
  @ApiProperty()
  @IsNotEmpty({ message: 'El texto es requerido' })
  @IsString()
  readonly nombre: string;
}