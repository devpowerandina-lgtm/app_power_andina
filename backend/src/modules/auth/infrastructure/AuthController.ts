import { Request, Response } from 'express';
import { LoginUser } from '../application/LoginUser';
import { RegisterUser } from '../application/RegisterUser';

export class AuthController {
  constructor(
    private loginUser: LoginUser,
    private registerUser: RegisterUser
  ) {}

  async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const result = await this.loginUser.execute(email, password);
      res.status(200).json(result);
    } catch (error: any) {
      res.status(401).json({ message: error.message });
    }
  }

  async register(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const result = await this.registerUser.execute(email, password);
      res.status(201).json(result);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }
}
