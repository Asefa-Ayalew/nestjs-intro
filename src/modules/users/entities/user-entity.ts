import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { UserRole, UserStatus } from '../enums/user.enum';
import { Course } from 'src/modules/course/entities/course.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  firstName!: string;

  @Column()
  lastName!: string;

  @Column({ unique: true })
  email!: string;

  @Column()
  password!: string;

  @Column({
    type: 'enum',
    enum: UserRole,
    default: UserRole.ADMIN,
  })
  role!: UserRole;

  @Column({
    type: 'enum',
    enum: UserStatus,
    default: UserStatus.ACTIVE,
  })
  status!: UserStatus;

  @Column()
  profilePicture!: string;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  @OneToMany(()=>Course, (course)=>course.instructor)
  courses!: Course[];
}
