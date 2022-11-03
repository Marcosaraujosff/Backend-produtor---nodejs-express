import prismaClient from '../../prisma';
import { DeslikeService } from './DeslikeService';

interface userLikeRequest {
    userId: string,
    postId: string,
    likes: string
}

class LikeService {
    async execute({ userId, postId, likes }: userLikeRequest) {

        const likeInt = parseInt(likes)
    }
}
export { LikeService }