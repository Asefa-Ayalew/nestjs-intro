import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';
import { UserRole, UserStatus } from '../enums/user.enum';



export class CreateUserDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  firstName!: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  lastName!: string;

  @ApiProperty()
  @IsEmail()
  email!: string;

  @ApiProperty()
  @MinLength(6)
  password!: string;

  @ApiProperty()
  @IsOptional()
  profilePicture!: string;
}
