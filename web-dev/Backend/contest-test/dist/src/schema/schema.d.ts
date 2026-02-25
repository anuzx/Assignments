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
export declare const ContestSchema: z.ZodObject<{
    title: z.ZodString;
    description: z.ZodString;
    startTime: z.ZodCoercedDate<unknown>;
    endTime: z.ZodCoercedDate<unknown>;
}, z.core.$strip>;
export declare const McqSchema: z.ZodObject<{
    questionText: z.ZodString;
    options: z.ZodDefault<z.ZodArray<z.ZodString>>;
    correctOptionIndex: z.ZodNumber;
    points: z.ZodNumber;
}, z.core.$strip>;
export declare const McqSubmissionSchema: z.ZodObject<{
    selectedOptionIndex: z.ZodNumber;
}, z.core.$strip>;
export declare const DsaSchema: z.ZodObject<{
    title: z.ZodString;
    description: z.ZodString;
    tags: z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodString>>>;
    points: z.ZodNumber;
    timeLimit: z.ZodNumber;
    memoryLimit: z.ZodNumber;
    testCases: z.ZodArray<z.ZodObject<{
        input: z.ZodString;
        expectedOutput: z.ZodString;
        isHidden: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export declare const DsaSolutionSchema: z.ZodObject<{
    code: z.ZodString;
    language: z.ZodString;
}, z.core.$strip>;
//# sourceMappingURL=schema.d.ts.map