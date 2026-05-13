import { User } from "src/modules/users/entities/user-entity";
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";


@Entity()
export class Profile {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  bio!: string;

  @Column()
  gender!: string;

  // @OneToOne(() => User, (user) => user.profile, {
  //   onDelete: "CASCADE",
  // })
  @JoinColumn()
  user!: User;
}