import { Role } from '../users.enum';

export interface IUser {
  id: number;
  username: string;
  password: string;
  role: Role;
}
