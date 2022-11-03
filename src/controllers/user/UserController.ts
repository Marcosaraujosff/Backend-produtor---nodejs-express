import { Request, Response } from "express";

import { CreateUserService } from "../../services/user/CreateUserService";
import { LoginUserService } from "../../services/user/LoginUserService";

class UserController{
    async handleCreateUser(req: Request, res: Response) {
        const { name, password, email, zipcode, city, cpf_cnpj } = req.body;

        const createUserService = new CreateUserService();

        const user = await createUserService.execute({ name, password, email, zipcode, city, cpf_cnpj });

        return res.json(user)
    }

    async handleLoginUser(req: Request, res: Response) {
        const { email, password } = req.body;

        const loginUserService = new LoginUserService();

        const user = await loginUserService.execute({ email, password });

        return res.json(user);
    }
}

export { UserController }