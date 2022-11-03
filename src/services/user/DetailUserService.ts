import prismaClient from "../../prisma";

class DetailUserService{
    async execute(userId: string){
        const user = prismaClient.user.findFirst({
            where: {
                id: userId
            },
            select: {
                id: true,
                name: true,
                email: true,
                cpf_cnpj: true,
                zipcode: true,
                city: true

            }
        })

        console.log (user)

        return user;
    }
}

export { DetailUserService }