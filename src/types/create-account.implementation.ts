import { Request, Response } from "express";
import { schema } from "@/validators/create-account";

export abstract class TypeCreateAccount{
    abstract createAccount<T extends schema, S extends Response>(data:T, res?:S): T | void;
    abstract deleteAccount<T extends schema, S extends Response>(data:T, res:S): T | void;
};
