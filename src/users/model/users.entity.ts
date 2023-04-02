import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
class UsersEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;
}

export default UsersEntity;
