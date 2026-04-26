export interface RegisterUserData {
  email: string;
  password: string;
}

export interface LoginUserData {
  email: string;
  password: string;
}

export interface AuthResponse {
  success: boolean;
  user?: any;
  error?: string;
}
