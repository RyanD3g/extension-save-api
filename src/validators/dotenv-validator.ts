import { ZodError, z } from 'zod';

const validateVariables = ()=>{
    const schema = z.object({
        DATABASE_URL: z.string(),
    });
    try {
        console.log("\n[ LOADING ENV ]  Variables Loaded ⚙️   [ LOADING ENV ] \n")
        return schema.parse(process.env);
    } catch (error) {
        if(error instanceof ZodError) throw new Error(error.errors[0].message);
    };
};

export { validateVariables };
