import { AuthRepository } from '../domain/AuthRepository';

export class RegisterUser {
  constructor(private authRepository: AuthRepository) {}

  async execute(email: string, password: string) {
    if (!email || !password) throw new Error('Email and password are required');
    if (password.length < 6) throw new Error('Password must be at least 6 characters');
    
    return await this.authRepository.register(email, password);
  }
}
