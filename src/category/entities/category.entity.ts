import { IsString } from "class-validator";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity()
export class Category {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column()
    @IsString()
    name!: string;

    @Column()
    @IsString()
    description!: string;

    @Column({ unique: true })
    slug!: string;

    @Column({nullable: true})
    parentId!: string | null;

    @ManyToOne(() => Category, category => category.id, { nullable: true, onDelete: 'SET NULL', })
    @JoinColumn({ name: 'parentId' })
    parent!: Category;

    @OneToMany(() => Category, category => category.parent)
    children!: Category[];

    @CreateDateColumn()
    createdAt!: Date;
}
