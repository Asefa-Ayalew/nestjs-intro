import { IsOptional, IsString } from 'class-validator';
import { Category } from 'src/category/entities/category.entity';
import { CourseLevel, CourseStatus } from 'src/common/enums/course.enum';
import { User } from 'src/modules/users/entities/user-entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';


@Entity()
export class Course {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  @IsString()
  title!: string;

  @Column()
  @IsString()
  description!: string;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
  })
  price!: number;

  @Column({
    type: 'enum',
    enum: CourseLevel,
  })
  level!: CourseLevel;

  @Column({
    type: 'enum',
    enum: CourseStatus,
    default: CourseStatus.DRAFT,
  })
  status!: CourseStatus;

  @Column('uuid')
  instructorId!: string;

  @ManyToOne(() => User, (user)=> user.courses)
  @JoinColumn({ name: 'instructorId' })
  instructor!: User;

  @Column({ nullable: true })
  @IsOptional()
  @IsString()
  thumbnail?: string;

  @Column('uuid')
  categoryId!: string;

  @ManyToOne(()=>Category, (category)=> category.courses)
  @JoinColumn({ name: 'categoryId' })
  category!: Category;

  @Column({ type: 'int', default: 0 })
  totalStudents!: number;

  @Column({ type: 'decimal', precision: 2, scale: 1, default: 0 })
  averageRating!: number;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}
