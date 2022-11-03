import prismaClient from "../../../prisma";

import { format } from 'date-fns';

class GetCommoditiesCoffeService {
    async execute() {
        const date = format(new Date(), 'dd/MM/yyyy');

        let checkAlreadyExists = await prismaClient.coffee.findFirst({
            where: {
                dateParams: date
            }
        })

        if (!checkAlreadyExists) {
            console.log("Ops, não encontramos nenhuma cotação dia "  + date, "então segue a ultima encontrada.")
            checkAlreadyExists = await prismaClient.coffee.findFirst({
                take: 1,
                orderBy: {
                    dateParams: "desc"
                }
            })
        }

        return checkAlreadyExists;
    }
}

export { GetCommoditiesCoffeService }