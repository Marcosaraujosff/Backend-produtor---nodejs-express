import { Request, Response } from "express";

import { UpdateProfileService } from '../../services/user/UpdateProfileService'

class updateProfileController {
    async handle(req: Request, res: Response) {

        const { userId, zipcode, city } = req.body;

        const updateProfileService = new UpdateProfileService();

        const updateProfile = await updateProfileService.execute({ userId, zipcode, city });

        return res.json(updateProfile);

    }
}

export { updateProfileController };