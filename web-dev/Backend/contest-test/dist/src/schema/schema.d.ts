import { z } from "zod";
export declare const SignupSchema: z.ZodObject<{
    name: z.ZodString;
    email: z.ZodEmail;
    password: z.ZodString;
    role: z.ZodDefault<z.ZodEnum<{
        creator: "creator";
        contestee: "contestee";
    }>>;
}, z.core.$strip>;
export declare const LoginSchema: z.ZodObject<{
    email: z.ZodEmail;
    password: z.ZodString;
}, z.core.$strip>;
//# sourceMappingURL=schema.d.ts.map