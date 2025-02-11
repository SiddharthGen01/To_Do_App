import { User } from "src/users/entities/user.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, TableForeignKey, UpdateDateColumn } from "typeorm";

@Entity()
export class Task {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User, user => user.task)
    user: User;

    @Column({unique: true})
    title: string;

    @Column()
    description: string;

    @Column()
    deadline: Date;

    @Column({default: false})
    isCompleted: boolean;

    @Column({default: false})
    isDeleted: boolean;

    @CreateDateColumn()
    createdDate: Date;

    @UpdateDateColumn()
    updatedDate: Date;
}
