import { z } from "zod"
const schema = z.object({
    nickname: z.string({ required_error:'ErroAq' }),
    password: z.string(),
});
type schemaLogin = z.infer<typeof schema>;

const validatorLogin = (data: unknown) =>{
    return schema.parse(data);
};

export { schemaLogin, validatorLogin };
