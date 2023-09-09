import { TypeLogin } from "@/types/login.implementation";
import { Response } from "express";

export class LoginAccountEntitie implements TypeLogin {
    constructor(){};
    login<T extends { nickname: string; password: string; }, S extends Response>(data: T, res?: S): void | Promise<S | undefined>{};
};
