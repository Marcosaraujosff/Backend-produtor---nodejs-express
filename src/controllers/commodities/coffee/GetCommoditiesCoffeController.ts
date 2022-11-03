import { Request, Response } from 'express';

import { GetCommoditiesCoffeService } from '../../../services/commodities/coffee/GetCommoditiesCoffeService';

class GetCommoditiesCoffeController {
    async handle( req: Request, res: Response ) {

        const getCommoditiesCoffeService = new GetCommoditiesCoffeService();

        const priceCoffee = await getCommoditiesCoffeService.execute()

        return res.json(priceCoffee)
    }
}

export { GetCommoditiesCoffeController }