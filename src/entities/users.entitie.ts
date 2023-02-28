import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm'
import { Exclude } from 'class-transformer'

@Entity('users')
export class User {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({length: 126})
    carro: string;

    @Column({length:120})
    name: string;

    @Column({length: 140, unique: true})
    email: string;

    @Column({length: 100})
    @Exclude()
    password: string;

    @Column()
    isAdm: boolean;

    @Column({default: true})
    isActive: boolean;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

}



