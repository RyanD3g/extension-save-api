import { describe, expect, it } from 'vitest';
import { CreateAccountControllerInMemory } from './in-memory';
describe('Aqui será testado as funções de criar conta de usuário', ()=>{
    it('Deveria criar uma conta normalmente', async ()=>{
        const createAccountNormal = CreateAccountControllerInMemory.createAccount({
            nickname:'RyanDiasMarinho',
        });
        expect(createAccountNormal).toHaveLength(2);
    });
    it('Deveria retornar um erro por nome de usuário igual', async ()=>{
        const createAccountNormal = CreateAccountControllerInMemory.createAccount({
            nickname:'teste',
        });
        expect(createAccountNormal).toThrow;
    });
    it('Deveria retornar um erro de validação do ZOD', async ()=>{
        const createAccountNormal = CreateAccountControllerInMemory.createAccount({
            nickname:'TESTE',
        });
        expect(createAccountNormal).toThrow;
    });
});
