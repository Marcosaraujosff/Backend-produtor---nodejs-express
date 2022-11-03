import { Router } from 'express';

import { isAuthenticated } from './middlewares/isAuthenticated'; 

import { CreateUserController } from './controllers/user/CreateUserController'
import { loginUserController } from './controllers/user/LoginUserController';
import { NewMessageController } from './controllers/messages/NewMessageController';
import { LoadMessageController } from './controllers/messages/LoadMessageController';
import { LikeController } from './controllers/posts/LikeUserController';
import { CreateCommoditiesCoffeController } from './controllers/commodities/coffee/CreateCommoditiesCoffeController';
import { GetCommoditiesCoffeController } from './controllers/commodities/coffee/GetCommoditiesCoffeController';
import { updateProfileController } from './controllers/user/updateProfileController';
import { DetailUserController } from './controllers/user/DetailUserController';
import { FethPostsController } from './controllers/posts/FethPostsController';
import { NewPostController } from './controllers/posts/NewPostController';

const router = Router();

//-- Routes user --
router.post('/register', new CreateUserController().handle);
router.post('/login', new loginUserController().handle);
router.put('/update/profile', new updateProfileController().handle);
router.get('/me', isAuthenticated, new DetailUserController().handle);

//-- Routes messages --
router.post('/message', new NewMessageController().handle);
router.get('/message/load', new LoadMessageController().handle);

//-- Routes posts --
router.post('/like', new LikeController().handle);
router.get('/getPosts', isAuthenticated, new FethPostsController().handle);
router.post('/newPost', isAuthenticated, new NewPostController().handle);

//-- Routes Commodities --
router.post('/commodities/coffee', new CreateCommoditiesCoffeController().handle);
router.get('/coffee', new GetCommoditiesCoffeController().handle);


export { router };