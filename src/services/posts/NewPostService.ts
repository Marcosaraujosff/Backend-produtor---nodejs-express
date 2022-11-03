import { response } from "express";
import prismaClient from "../../prisma";

interface PostRequest {
    content: string,
    autor: string,
    userId: string,
    likes: string,
    avatarUrl: string, 
}

class NewPostService {
    async execute({ content, autor, userId, likes, avatarUrl }: PostRequest) {

        const likeInt = parseInt(likes)

        const response = await prismaClient.posts.create({
            data: {
                content: content,
                autor: autor,
                userId: userId,
                likes: likeInt,
                avatarUrl: avatarUrl,
            },
            select: {
                content: true,
                autor: true,
                userId: true,
                avatarUrl: true,
                likes: true
            }
        })

        return response

    }
}

export { NewPostService }