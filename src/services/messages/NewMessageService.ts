import prismaClient from "../../prisma";

interface userMessage {
    name: string,
    owner: string,
    message: string,
    userId: string
};

class NewMessageService {
    async execute({ name, owner, message, userId }: userMessage) {

        const dataPublish = await prismaClient.messages.create({
            data: {
                name: name,
                owner: owner,
                message: message,
                userId: userId
            },
        })

        return dataPublish;

    }
}

export { NewMessageService }