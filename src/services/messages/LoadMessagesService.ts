import prismaClient from "../../prisma";

interface LoadRequest {
    name: string,
    owner: string
}

class LoadMessageService {
    async execute({ name, owner }: LoadRequest) {

      

        const messages = await prismaClient.messages.findMany();

        console.log(messages)

        return messages;

    }
}

export { LoadMessageService }