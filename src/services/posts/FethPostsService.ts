import prismaClient from "../../prisma";

interface PostRequest {
    startAfter?: string
}


class FethPostsService {
    async execute({startAfter}: PostRequest) {

        const postsAll = await prismaClient.posts.findMany({
            take: 5,
            orderBy: {
                created_at: 'desc'
            },
            select: {
                content: true,
                autor: true,
                userId: true,
                avatarUrl: true,
                likes: true
            }
        })

        return postsAll

    }
}

export { FethPostsService }