import { prisma } from "@/config/db.config";
import { CreateAccountEntite } from "@/entitie/create-account";
import { Response } from "express";
import * as bcrypt from 'bcrypt';
import { UserExistsMessageError } from "@/handleErros/user-exists.error";
import { ZodError } from "zod";

export class CreateAccountController extends CreateAccountEntite {
    constructor(){
        super();
    };
    static async createAccount<T extends { nickname: string; password: string; }, S extends Response>(data: T, res?: S): Promise<S | undefined> {
        try {
            const salt = await bcrypt.genSalt(12);
            const hash = await bcrypt.hash(data.password, salt);
            const nicknameExists = await prisma.users.findUnique({
                where:{
                    nickname: data.nickname,
                },
            });
            if(nicknameExists){
                throw new UserExistsMessageError(res);
            };
            const registerAccountInDB = await prisma.users.create({
                data:{
                    nickname: data.nickname,
                    password: hash,
                },
            });
    
            return res?.json({ registred: true });
        } catch (error) {
            if(error instanceof ZodError) res?.status(400).json({ erro:error.errors, });
            if(error instanceof UserExistsMessageError) res?.status(400).json({ error, });
            return res?.status(500).json({ error, });            
        };
    }
};
