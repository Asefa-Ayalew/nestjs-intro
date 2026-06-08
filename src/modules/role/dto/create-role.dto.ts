import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateRoleDto {
  @ApiProperty()
  @IsNotEmpty()
  name!: string;

  @ApiProperty({ type: [String] })
  @IsNotEmpty({ each: true })
  permissions!: string[];
}
