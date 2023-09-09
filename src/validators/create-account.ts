import { z } from 'zod';

const schemaCreateAccount = z.object({
    nickname: z.string().min(3, { message:'O minimo para o nickname é 3' }),
    password: z.string().min(5, { message:'O minimo para um password são 5 caracteres' }),
});
type schema = z.infer<typeof schemaCreateAccount>;

const validatorSchemaCreateAccount = (value:unknown) => {
    return schemaCreateAccount.parse(value);
};

export { schema, validatorSchemaCreateAccount };
