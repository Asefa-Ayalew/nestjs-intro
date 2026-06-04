import { ApiProperty } from '@nestjs/swagger';
import {
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

export class CreateEmployeeDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  userId!: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  departmentId!: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  position!: string;

  @ApiProperty()
  @IsNumber()
  salary!: number;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  phone!: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  address!: string;

  @ApiProperty()
  @IsDateString()
  hireDate!: Date;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  profileImage!: string;
}