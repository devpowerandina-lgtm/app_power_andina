import { supabase } from '../../../shared/infrastructure/SupabaseClient';
import { RegisterUserData, LoginUserData, AuthResponse } from './types';

export class AuthService {
  static async register({ email, password }: RegisterUserData): Promise<AuthResponse> {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) return { success: false, error: error.message };
    
    // Create profile entry if needed (per user request HU-01 mentions tables like perfiles)
    if (data.user) {
      const { error: profileError } = await supabase
        .from('perfiles')
        .insert([{ id: data.user.id, email: data.user.email }]);
        
      if (profileError) console.error('Error creating profile:', profileError);
    }

    return { success: true, user: data.user };
  }

  static async login({ email, password }: LoginUserData): Promise<AuthResponse> {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) return { success: false, error: error.message };

    return { success: true, user: data.user };
  }

  static async signInWithGoogle(): Promise<AuthResponse> {
    // This requires expo-auth-session setup which is complex for a snippet
    // For now, we simulate or point to the implementation
    // In a real app, you'd use supabase.auth.signInWithOAuth({ provider: 'google' })
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: 'powerandina://google-auth',
      }
    });

    if (error) return { success: false, error: error.message };
    return { success: true };
  }

  static async logout() {
    await supabase.auth.signOut();
  }
}
