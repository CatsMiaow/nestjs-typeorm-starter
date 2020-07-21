import { Column, PrimaryGeneratedColumn, Entity } from 'typeorm';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column()
  public name!: string;
}
