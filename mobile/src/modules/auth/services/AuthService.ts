import { supabase } from '../../../shared/infrastructure/supabase';

export interface AuthResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export const signInWithEmail = async (email: string, password: string): Promise<AuthResponse> => {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return { success: false, error: error.message };
    }

    return { success: true, data };
  } catch (err: any) {
    return { success: false, error: err.message || 'Ocurrió un error inesperado' };
  }
};

export const signUpWithEmail = async (email: string, password: string): Promise<AuthResponse> => {
  try {
    console.log("Intentando conectar a Supabase URL:", process.env.EXPO_PUBLIC_SUPABASE_URL);
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      return { success: false, error: error.message };
    }

    return { success: true, data };
  } catch (err: any) {
    return { success: false, error: err.message || 'Ocurrió un error inesperado' };
  }
};

export const signOut = async (): Promise<AuthResponse> => {
  try {
    const { error } = await supabase.auth.signOut();

    if (error) {
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (err: any) {
    return { success: false, error: err.message || 'Ocurrió un error inesperado' };
  }
};

