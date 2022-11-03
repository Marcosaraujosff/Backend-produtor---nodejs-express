import { Request, Response } from 'express';

import { CreateCommoditiesCoffeService } from '../../../services/commodities/coffee/CreateCommoditiesCoffeService';

class CreateCommoditiesCoffeController {
    async handle(req: Request, res: Response) {

        const { type_Dura, type_Rio, type_7_8 } = req.body;
        
        const createCommoditiesCoffeService = new CreateCommoditiesCoffeService();

        const createCommodities = await createCommoditiesCoffeService.execute({ type_Dura, type_Rio, type_7_8 });

        return res.json(createCommodities);

    }
}

export { CreateCommoditiesCoffeController }