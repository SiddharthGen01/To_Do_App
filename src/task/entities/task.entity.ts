import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Task {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    deadline: Date;

    @Column()
    isCompleted: boolean;

    @Column()
    isDeleted: boolean;

    @Column()
    createdDate: Date;

    @Column()
    updatedDate: Date;
}
