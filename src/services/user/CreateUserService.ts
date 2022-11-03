import prismaClient from "../../prisma";
import { hash } from 'bcryptjs'

interface UserRequest {
    name: string,
    email: string,
    password: string,
    city: string,
    zipcode: string,
    cpf_cnpj: string
};

class CreateUserService {
    async execute({ name, email, password, city, zipcode, cpf_cnpj }: UserRequest) {

        const userAlreadyExists = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        })

        if (userAlreadyExists) {
            throw new Error("Email ja cadastrado em outra conta.")
        }

        const userCredentialExists = await prismaClient.user.findFirst({
            where: {
                cpf_cnpj: cpf_cnpj
            }
        })

        if (userCredentialExists) {
            throw new Error("Cpf/Cnpj já cadastrado em outra conta.")
        }

        const passwordHash = await hash(password, 8)

        const user = await prismaClient.user.create({
            data: {
                name: name,
                email: email,
                password: passwordHash,
                city: city,
                zipcode: zipcode,
                cpf_cnpj: cpf_cnpj
            },
            select: {
                name: true,
                email: true,
                city: true,
                zipcode: true,
                cpf_cnpj: true
            }
        })

        return user;
    }
};

export { CreateUserService };


