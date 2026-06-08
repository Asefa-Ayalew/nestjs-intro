import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { CourseLevel, CourseStatus } from 'src/common/enums/course.enum';

export class CreateCourseDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  title!: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  description!: string;

  @ApiProperty()
  @IsNotEmpty()
  price!: number;

  @ApiProperty({ enum: CourseLevel })
  @IsNotEmpty()
  level!: CourseLevel;

  @ApiProperty({
    enum: CourseStatus,
    default: CourseStatus.DRAFT,
  })
  status!: CourseStatus;

  @ApiProperty()
  @IsNotEmpty()
  instructorId!: string;

  @ApiProperty()
  @IsOptional()
  thumbnail!: string;

  @ApiProperty()
  @IsNotEmpty()
  categoryId!: string;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  totalStudents!: number;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  averageRating!: number;
}
