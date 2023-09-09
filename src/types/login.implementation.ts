import { schemaLogin } from "@/validators/login";
import { Response } from "express";

export abstract class TypeLogin {
    abstract login<T extends schemaLogin, S extends Response>(data:T, res?:S): T | void | Promise<S | undefined>; 
};
