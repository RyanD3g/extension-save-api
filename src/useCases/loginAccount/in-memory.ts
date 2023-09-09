import { LoginAccountEntitie } from "@/entitie/login-user";
import { Users } from "@prisma/client";
import { Response } from "express";

export class LoginAccountInMemory extends LoginAccountEntitie {
    private static loginModelDatabase:Users[] = [{
        id:'123',
        nickname:'teste',
        password:'teste',
        createdAt:new Date(),
        updatedAt:new Date(),
    }];
    constructor(){
        super();
    };
    static login<T extends { nickname: string; password: string; }, S extends Response>(data: T, res?: S): { token:string } | unknown {
        try {
            const nicknameExistsInDataBaseOrNo = this.loginModelDatabase.some(e => e.nickname === data.nickname);
            if(!nicknameExistsInDataBaseOrNo) throw new Error('Nickname ou password incorretos!!');
            if(!this.loginModelDatabase.some(e => e.password === data.password)) throw new Error('Nickname ou password incorretos!!')
            return { token:'ndsbvh67839mss-vdsbvewbeevievn73k' };
        } catch (error) {
            return error;
        };
    };
};
