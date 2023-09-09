import { Request, Response, Router } from "express";
import { CreateAccountController } from './src/useCases/createAccount/create-account.controller';
import { LoginAccountController } from './src/useCases/loginAccount/login-account.controller';
const route = Router();

route.get('/', (req:Request, res:Response)=> res.send('Welcome to extension-save!!'));

route.post('create/account', (req:Request, res:Response)=> CreateAccountController.createAccount({ nickname:req.body?.nickname, password:req.body?.password }, res));
route.post('login/account', (req:Request, res:Response)=> LoginAccountController.login(req.body, res));

export { route };
