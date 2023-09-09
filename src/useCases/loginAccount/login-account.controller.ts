import { prisma } from "@/config/db.config";
import { LoginAccountEntitie } from "@/entitie/login-user";
import { ErrorNicknameOrPassword } from "@/handleErros/nickname-or-password.error";
import { Response } from "express";
import * as bcrypt from 'bcrypt';
import { ZodError } from "zod";
export class LoginAccountController extends LoginAccountEntitie {
    constructor(){
        super();
    };
    static async login<T extends { nickname: string; password: string; }, S extends Response>(data: T, res?: S): Promise<S | undefined | any> {
        try {
            const validateNicknameIfExists = await prisma.users.findUnique({
                where:{
                    nickname: data.nickname,
                },
            });
            if(!validateNicknameIfExists) throw new ErrorNicknameOrPassword();
            if(!await bcrypt.compare(validateNicknameIfExists.password, data.password)) throw new ErrorNicknameOrPassword();
            return res?.status(200).json({ loged:true });
        } catch (error) {
            if(error instanceof ErrorNicknameOrPassword) return error;
            if(error instanceof ZodError) return error.errors[0];
            return error;
        }
    };
}