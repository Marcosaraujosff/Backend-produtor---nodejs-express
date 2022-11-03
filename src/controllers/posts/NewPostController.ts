import { Request, Response } from "express";
import { NewPostService } from "../../services/posts/NewPostService";

class NewPostController{
    async handle(req: Request, res: Response){

        const { content, autor, userId, avatarUrl, likes } = req.body;

        const newPostService = new NewPostService();

        const posts = newPostService.execute({ content, autor, userId, avatarUrl, likes });

        return res.json(posts);

    }
}

export { NewPostController }


/*created: new Date(),
        content: post,
        autor: user?.nome,
        userId: user?.uid,
        likes: 0,
        avatarUrl, */