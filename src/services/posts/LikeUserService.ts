import prismaClient from "../../prisma";
import { DeslikeService } from "./DeslikeService";
import { LikeService } from "./LikeService";


interface userLikeRequest {
    userId: string,
    postId: string,
    likes: string
}

class LikeUserService {
    async execute({ userId, postId, likes }: userLikeRequest) {

        const doc = await prismaClient.likes.findFirst({
            where: {
                userId: userId,
                id: postId
            }
        })

        if (doc) {
            const deslikeService = new DeslikeService();

            const desLike = deslikeService.execute({ userId, postId, likes })

            return desLike;
        }

        const likeService = new LikeService();

        const like = likeService.execute({ userId, postId, likes });

        return like;
    }
}

export { LikeUserService };