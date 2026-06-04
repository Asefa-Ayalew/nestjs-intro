import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Role {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  name!: string;

  @Column('text', {
    array: true,
    default: [],
  })
  permissions!: string[];

  @CreateDateColumn()
  createdAt!: Date;
}
