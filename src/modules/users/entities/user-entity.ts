import { Post } from "src/modules/posts/entities/post.entity";
import { Profile } from "src/modules/profiles/entities/profile.entity";
import {
  Column,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";


@Entity()
export class User {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  firstName!: string;

  @Column({ unique: true })
  email!: string;

  @OneToMany(() => Post, (post) => post.user)
  posts!: Post[];

  @OneToOne(() => Profile, (profile) => profile.user)
  profile!: Profile;
}