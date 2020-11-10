import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

import { Category } from './Category';

@Entity()
export class Memo {
  @PrimaryGeneratedColumn({ type: 'int', unsigned: true, name: 'id' })
  public id!: number;

  @Column('varchar', { nullable: false, length: 255, name: 'title' })
  public title!: string;

  @Column('text', { nullable: true, name: 'content' })
  public content?: string;

  @ManyToMany(() => Category)
  @JoinTable()
  public categories?: Category[];

  @Column('timestamp', { nullable: false, default: () => 'CURRENT_TIMESTAMP', name: 'updated_at' })
  public updated_at!: Date;

  @Column('timestamp', { nullable: false, default: () => 'CURRENT_TIMESTAMP', name: 'created_at' })
  public created_at!: Date;
}
