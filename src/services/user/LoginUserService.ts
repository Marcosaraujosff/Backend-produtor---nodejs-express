import prismaCliente from '../../prisma';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

interface LoginRequest {
    email: string,
    password: string
}

class LoginUserService {

    async execute({ email, password }: LoginRequest) {

        const credentialsCheck = await prismaCliente.user.findFirst({
            where: {
                email: email,
            },
        })

        if (!credentialsCheck) {
            throw new Error("Ops, dados invalidos.")
        }

        const passwordMatch = await compare(password, credentialsCheck.password)

        if (!passwordMatch) {
            throw new Error("Ops, dados invalidos.")
        }

        const token = sign(
            {
                name: credentialsCheck.name,
                email: credentialsCheck.email
            },
            process.env.JWT_SECRET,
            {
                subject: credentialsCheck.id,
                expiresIn: '30d'
            }
        )


        return {
            id: credentialsCheck.id,
            name: credentialsCheck.name,
            email: credentialsCheck.email,
            city: credentialsCheck.city,
            zipcode: credentialsCheck.zipcode,
            token: token
        };
    }
}

export { LoginUserService }