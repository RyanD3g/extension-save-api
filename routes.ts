import { Request, Response, Router } from "express";
import { CreateAccountController } from './src/useCases/createAccount/create-account.controller';
const route = Router();

route.get('/', (req:Request, res:Response)=> res.send('Welcome to extension-save!!'));

route.post('create/nickname', (req:Request, res:Response)=> CreateAccountController.createAccount({ nickname:req.body?.nickname, password:req.body?.password }, res));

export { route };
