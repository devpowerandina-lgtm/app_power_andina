import { AuthRepository } from '../domain/AuthRepository';

export class LoginUser {
  constructor(private authRepository: AuthRepository) {}

  async execute(email: string, password: string) {
    if (!email || !password) throw new Error('Email and password are required');
    return await this.authRepository.login(email, password);
  }
}
