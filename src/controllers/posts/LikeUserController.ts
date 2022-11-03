import { Request, Response } from 'express';
import { LikeUserService } from '../../services/posts/LikeUserService';

class LikeUserController {
    async handle(req: Request, res: Response) {
        const { userId, postId, likes } = req.body;

        const likeService = new LikeUserService();

        const likeUserService = await likeService.execute({ userId, postId, likes });

        return res.json(likeUserService)
    }
}

export { LikeUserController };