import { Request, Response } from 'express';
import { LoadMessageService } from '../../services/messages/LoadMessagesService';

class LoadMessageController {
    async handle(req: Request, res: Response) {

        const { name, owner } = req.body;

        const loadMessageService = new LoadMessageService();

        const returLoad = await loadMessageService.execute({ name, owner });

        return res.json(returLoad);

    }
}

export { LoadMessageController }