import { Response } from "express";

export class UserExistsMessageError extends Error {
    constructor(res:Response | undefined){
        res?.status(400);
        super('Nickname existente!');
    };
};
