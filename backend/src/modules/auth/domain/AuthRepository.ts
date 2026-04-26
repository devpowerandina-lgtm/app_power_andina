import { User } from './User';

export interface AuthRepository {
  login(email: string, password: string): Promise<{ user: User; token: string }>;
  register(email: string, password: string): Promise<{ user: User; token: string }>;
}
