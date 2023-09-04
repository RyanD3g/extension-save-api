import { z } from 'zod';

const validateVariables = ()=>{
    const schema = z.object({
        DATABASE_URL: z.string(),
    });
    console.log("\n[ LOADING ENV ]  Variables Loaded ⚙️   [ LOADING ENV ] \n")
    return schema.parse(process.env);
};

export { validateVariables };
