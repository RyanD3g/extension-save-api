import { z } from 'zod';

const schemaCreateAccount = z.object({
    nickname: z.string().min(3),
});
type schema = z.infer<typeof schemaCreateAccount>;

const validatorSchemaCreateAccount = (value:unknown) => {
    return schemaCreateAccount.parse(value);
};

export { schema, validatorSchemaCreateAccount };
