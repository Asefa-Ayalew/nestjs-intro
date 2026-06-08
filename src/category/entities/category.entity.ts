import { IsString } from "class-validator";
import { Course } from "src/course/entities/course.entity";
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

    @OneToMany(() => Course, course => course.category)
    courses!: Course[];

    @CreateDateColumn()
    createdAt!: Date;
}
