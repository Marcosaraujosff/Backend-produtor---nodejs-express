import prismaClient from '../../prisma';

interface userLikeRequest {
    userId: string,
    postId: string,
    likes: string
}

class DeslikeService{
    async execute({userId, postId, likes}: userLikeRequest) {

    }
}
export { DeslikeService }