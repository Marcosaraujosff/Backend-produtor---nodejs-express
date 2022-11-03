import { Response, Request } from 'express';

import { DetailUserService } from '../../services/user/DetailUserService';

class DetailUserController {
    async handle(req: Request, res: Response){

        const userId = req.user_id;

        console.log(userId)

        const detailUserService = new DetailUserService();

        const user = await detailUserService.execute(userId);

        return res.json(user);
}
}

export { DetailUserController }