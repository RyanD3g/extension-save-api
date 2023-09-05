import { Response } from "express";
import { CreateAccountEntite } from "@/entitie/create-account";
import { Users } from "@prisma/client";
import { validatorSchemaCreateAccount } from "@/validators/create-account";

export class CreateAccountControllerInMemory extends CreateAccountEntite {
    constructor(){
        super();
    };
    static createAccount<T extends { nickname: string; password: string; }, S extends Response>(body: T, res?:S) {
        try {
            
            const validateData = validatorSchemaCreateAccount(body);
            const accountUserModelExample:Users[] = [{
                id:'123',
                nickname:'teste',
                password:body.password,
                createdAt:new Date(),
                updatedAt:new Date(),
            }];
            const userExistsInModel = accountUserModelExample.some(e => e.nickname === body.nickname);
            if(userExistsInModel){
                throw new Error("Nickname já cadastrado! Escolha outro...");
            };
            const createUserInModel = accountUserModelExample.push({
                id:'3456',
                nickname:body.nickname,
                password:body.password,
                createdAt:new Date(),
                updatedAt:new Date(),
            });
            return accountUserModelExample;
        } catch (error) {
            return error;
        };
    }
};
