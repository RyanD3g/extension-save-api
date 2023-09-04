import { Response } from "express";
import { TypeCreateAccount } from "@/types/create-account.implementation";

export class CreateAccountEntite implements TypeCreateAccount{
    constructor(){};
    createAccount<T extends { nickname: string; }, S extends Response>(data: T, res?:S): void {};
    deleteAccount<T extends { nickname: string; }, S>(data: T, res:S):void{};
};
