import * as runtime from "@prisma/client/runtime/client";
import * as $Class from "./internal/class.js";
import * as Prisma from "./internal/prismaNamespace.js";
export * as $Enums from './enums.js';
export * from "./enums.js";
/**
 * ## Prisma Client
 *
 * Type-safe database client for TypeScript
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export declare const PrismaClient: $Class.PrismaClientConstructor;
export type PrismaClient<LogOpts extends Prisma.LogLevel = never, OmitOpts extends Prisma.PrismaClientOptions["omit"] = Prisma.PrismaClientOptions["omit"], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = $Class.PrismaClient<LogOpts, OmitOpts, ExtArgs>;
export { Prisma };
/**
 * Model User
 *
 */
export type User = Prisma.UserModel;
/**
 * Model Contest
 *
 */
export type Contest = Prisma.ContestModel;
/**
 * Model McqQuestion
 *
 */
export type McqQuestion = Prisma.McqQuestionModel;
/**
 * Model DsaProblem
 *
 */
export type DsaProblem = Prisma.DsaProblemModel;
/**
 * Model TestCase
 *
 */
export type TestCase = Prisma.TestCaseModel;
/**
 * Model McqSubmission
 *
 */
export type McqSubmission = Prisma.McqSubmissionModel;
/**
 * Model DsaSubmission
 *
 */
export type DsaSubmission = Prisma.DsaSubmissionModel;
//# sourceMappingURL=client.d.ts.map