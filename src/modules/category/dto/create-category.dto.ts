import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString, IsUUID } from "class-validator";

export class CreateCategoryDto {
    @ApiProperty()
    @IsString()
    name!: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    description?: string;
    
    @ApiProperty()
    @IsString()
    slug!: string;
    
    @ApiProperty()
    @IsOptional()
    @IsUUID()
    parentId?: string;

}
