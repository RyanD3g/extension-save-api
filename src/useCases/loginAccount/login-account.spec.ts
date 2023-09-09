import { describe, expect, it } from "vitest";
import { LoginAccountInMemory } from "./in-memory";

describe('Aqui será testado funções de login', ()=>{
    it('Deveria fazer login normalmente', ()=>{
        const exec = LoginAccountInMemory.login({
            nickname:'teste',
            password:'teste',
        }) as { token:string };
        expect(exec.token).toBeDefined();
    });
    it('Deveria dar erro de nickname ou password inválido', ()=>{
        const exec = LoginAccountInMemory.login({
            nickname:'tesfsfe',
            password:'teste',
        });
        expect(exec).toThrow;
    });
    it('Deveria dar erro de nickname ou password inválido', ()=>{
        const exec = LoginAccountInMemory.login({
            nickname:'teste',
            password:'testesfgerhu6i',
        });
        expect(exec).toThrow;
    });
});
