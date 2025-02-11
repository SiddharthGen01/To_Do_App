import { Task } from "src/task/entities/task.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, Unique, UpdateDateColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToMany(() => Task, task => task.user)
    task: Task[];

    @Column()
    name: string;

    @Column({unique: true})
    email: string;

    @Column()
    password: string;

    @Column({default: true})
    isActive: boolean;

    @CreateDateColumn()
    createdDate: Date;

    @UpdateDateColumn()
    updatedDate: Date;
}
