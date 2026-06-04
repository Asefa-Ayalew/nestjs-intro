import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Employee {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  userId!: string;

  @Column()
  departmentId!: string;

  @Column()
  position!: string;

  @Column('decimal')
  salary!: number;

  @Column()
  phone!: string;

  @Column()
  address!: string;

  @Column()
  hireDate!: Date;

  @Column()
  profileImage!: string;
}
