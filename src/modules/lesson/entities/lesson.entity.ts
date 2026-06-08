import { Course } from 'src/modules/course/entities/course.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Lesson {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  title!: string;

  @Column()
  content!: string;

  @Column('uuid')
  videoUrl!: string;

  @Column('uuid')
  courseId!: string;

  @ManyToOne(() => Course, (course) => course.lesson)
  course!: Course;

  @Column()
  order!: number;

  @Column()
  duration!: number;

  @Column({ default: false })
  isFree!: boolean;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}
