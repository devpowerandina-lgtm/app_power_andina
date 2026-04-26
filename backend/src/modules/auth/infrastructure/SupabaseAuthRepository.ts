import { AuthRepository } from '../domain/AuthRepository';
import { User } from '../domain/User';
import { supabase } from '../../../shared/infrastructure/SupabaseClient';

export class SupabaseAuthRepository implements AuthRepository {
  async login(email: string, password: string): Promise<{ user: User; token: string }> {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw new Error(error.message);
    if (!data.user || !data.session) throw new Error('Authentication failed');

    const user: User = {
      id: data.user.id,
      email: data.user.email || '',
    };

    return { user, token: data.session.access_token };
  }

  async register(email: string, password: string): Promise<{ user: User; token: string }> {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) throw new Error(error.message);
    if (!data.user || !data.session) throw new Error('Registration failed');

    const user: User = {
      id: data.user.id,
      email: data.user.email || '',
    };

    return { user, token: data.session.access_token };
  }
}
