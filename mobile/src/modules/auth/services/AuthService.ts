import * as WebBrowser from 'expo-web-browser';
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

export const resetPassword = async (email: string): Promise<AuthResponse> => {
  try {
    const { error } = await supabase.auth.resetPasswordForEmail(email);

    if (error) {
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (err: any) {
    return { success: false, error: err.message || 'Ocurrió un error inesperado' };
  }
};

export const signInWithGoogle = async (): Promise<AuthResponse> => {
  try {
    const redirectUrl = 'powerandina://google-auth';

    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: redirectUrl,
        skipBrowserRedirect: true,
        queryParams: {
          prompt: 'select_account'
        }
      },
    });

    if (error) {
      return { success: false, error: error.message };
    }

    const res = await WebBrowser.openAuthSessionAsync(data.url, redirectUrl);

    if (res.type === 'success') {
      const url = res.url;
      // Supabase devuelve los tokens en el fragmento (#) o query string (?)
      const paramsStr = url.split('#')[1] || url.split('?')[1];
      const params: Record<string, string> = {};
      
      if (paramsStr) {
        paramsStr.split('&').forEach(part => {
          const [key, value] = part.split('=');
          params[key] = decodeURIComponent(value);
        });
      }

      const { access_token, refresh_token } = params;

      if (access_token) {
        const { error: sessionError } = await supabase.auth.setSession({
          access_token,
          refresh_token: refresh_token || '',
        });

        if (sessionError) {
          return { success: false, error: sessionError.message };
        }

        return { success: true, data: params };
      }
    }

    return { success: false, error: 'Inicio de sesión con Google cancelado o fallido.' };
  } catch (err: any) {
    return { success: false, error: err.message || 'Ocurrió un error inesperado al iniciar sesión con Google' };
  }
};
