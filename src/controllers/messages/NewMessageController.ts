import { Request, Response } from 'express';
import { NewMessageService } from '../../services/messages/NewMessageService'

class NewMessageController {
    async handle(req: Request, res: Response) {
        const { name, owner, message, userId } = req.body;

        const newMessageservice = new NewMessageService();
        const userMessage = await newMessageservice.execute({ name, owner, message, userId })

        return res.json(userMessage)
    }
}

export { NewMessageController }