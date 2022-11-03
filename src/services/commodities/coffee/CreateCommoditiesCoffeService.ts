import prismaClient from "../../../prisma";

import { format } from 'date-fns';

interface userRequest {
    type_Dura: string,
    type_Rio: string,
    type_7_8: string,
}

class CreateCommoditiesCoffeService {
    async execute({ type_Dura, type_Rio, type_7_8 }: userRequest) {

        if (!type_Dura || !type_Rio || !type_7_8) {
            throw new Error("ops, favor preencher todos os dados.");
        }

        const date = format(new Date(), 'dd/MM/yyyy');
        // const date = "08/08/2022";   // "dia a ser setado - dd/mm/yyyy" - usar em caso de precisar fazer algo na "Mão"

        const checkAlreadyExists = await prismaClient.coffee.findFirst({
            where: {
                dateParams: date
            }
        })

        if (checkAlreadyExists) {
            throw new Error("ops, o processo de hoje ja foi gravado na base em outra tentativa")
        }

        const saveDataRequest = await prismaClient.coffee.create({
            data: {
                type_Dura: type_Dura,
                type_Rio: type_Rio,
                type_7_8: type_7_8,
                dateParams: date

            }
        })

        return saveDataRequest;
    }
};

export { CreateCommoditiesCoffeService }
