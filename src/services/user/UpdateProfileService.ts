import prismaClient from "../../prisma";

interface userRequest {
    userId: string,
    zipcode?: string,
    city?: string
}

class UpdateProfileService {
    async execute({ userId, zipcode, city }: userRequest) {

        if (!userId) {
            throw new Error("ops, parece que algo deu errado, faltou o id na requisição.")
        }

        console.log({userId, zipcode, city})

    
    const userAlreadyExists = await prismaClient.user.findFirst({
        where: {
            id: userId,
        }
    })

    if (!userAlreadyExists) {
        throw new Error("ops, parece que algo deu errado.")
    }

    const updateData = await prismaClient.user.updateMany({
        where: {
            id: userId
        },
        data: {
            zipcode: zipcode,
            city: city
        }
    })

    return updateData;

    }
}

export { UpdateProfileService };