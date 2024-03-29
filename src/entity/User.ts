import {Entity, Column} from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity({ name: 'usuarios' })
export class User extends BaseEntity {

    @Column({ type: 'varchar', length: 100 })
    name: string;

    @Column({ type: 'varchar', length: 100 })
    photo: string;

    @Column({ type: 'varchar', length: 100 })
    email: string;

    @Column({ default: false })
    isRoot: boolean;

    @Column({ type: 'varchar', length: 100 })
    password: string;
}
