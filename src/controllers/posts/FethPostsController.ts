import { Request, Response } from "express";
import { FethPostsService } from "../../services/posts/FethPostsService";

class FethPostsController{
    async handle(req: Request, res: Response){

        const { startAfter } = req.body;

        const fetchPostsService = new FethPostsService();

        const posts = await fetchPostsService.execute({startAfter})

        console.log('chegou aqui')

        console.log(posts)

        return res.json(posts)

    }
}

export { FethPostsController }