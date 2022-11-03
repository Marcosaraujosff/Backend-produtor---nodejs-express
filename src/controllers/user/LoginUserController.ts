import { Request, Response } from "express";

import { LoginUserService } from '../../services/user/LoginUserService';

class loginUserController {
    async handle(req: Request, res: Response) {
        const { email, password } = req.body;

        const loginUserService = new LoginUserService();

        const user = await loginUserService.execute({ email, password });

        return res.json(user);
    }
}

export { loginUserController };