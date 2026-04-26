import { Router } from 'express';
import { AuthController } from './AuthController';
import { LoginUser } from '../application/LoginUser';
import { RegisterUser } from '../application/RegisterUser';
import { SupabaseAuthRepository } from './SupabaseAuthRepository';

const authRouter = Router();

const authRepository = new SupabaseAuthRepository();
const loginUser = new LoginUser(authRepository);
const registerUser = new RegisterUser(authRepository);
const authController = new AuthController(loginUser, registerUser);

authRouter.post('/login', (req, res) => authController.login(req, res));
authRouter.post('/register', (req, res) => authController.register(req, res));

export { authRouter };
