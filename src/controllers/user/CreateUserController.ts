import { Request, Response } from "express";

import { CreateUserService } from '../../services/user/CreateUserService';

class CreateUserController {
    async handle(req: Request, res: Response) {
        const { name, password, email, zipcode, city, cpf_cnpj } = req.body;

        const createUserService = new CreateUserService();

        const user = await createUserService.execute({ name, password, email, zipcode, city, cpf_cnpj });

        return res.json(user)
    }

}

export { CreateUserController }