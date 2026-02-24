import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
/**
 * Helper for filtering JSON entries that have `null` on the database (empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly User: "User";
    readonly Contest: "Contest";
    readonly McqQuestion: "McqQuestion";
    readonly DsaProblem: "DsaProblem";
    readonly TestCase: "TestCase";
    readonly McqSubmission: "McqSubmission";
    readonly DsaSubmission: "DsaSubmission";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly email: "email";
    readonly password: "password";
    readonly role: "role";
    readonly createdAt: "createdAt";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const ContestScalarFieldEnum: {
    readonly id: "id";
    readonly title: "title";
    readonly description: "description";
    readonly creatorId: "creatorId";
    readonly startTime: "startTime";
    readonly endTime: "endTime";
    readonly createdAt: "createdAt";
};
export type ContestScalarFieldEnum = (typeof ContestScalarFieldEnum)[keyof typeof ContestScalarFieldEnum];
export declare const McqQuestionScalarFieldEnum: {
    readonly id: "id";
    readonly contestId: "contestId";
    readonly questionText: "questionText";
    readonly options: "options";
    readonly correctOptionIndex: "correctOptionIndex";
    readonly points: "points";
    readonly createdAt: "createdAt";
};
export type McqQuestionScalarFieldEnum = (typeof McqQuestionScalarFieldEnum)[keyof typeof McqQuestionScalarFieldEnum];
export declare const DsaProblemScalarFieldEnum: {
    readonly id: "id";
    readonly contestId: "contestId";
    readonly title: "title";
    readonly description: "description";
    readonly tags: "tags";
    readonly points: "points";
    readonly timeLimit: "timeLimit";
    readonly memoryLimit: "memoryLimit";
    readonly createdAt: "createdAt";
};
export type DsaProblemScalarFieldEnum = (typeof DsaProblemScalarFieldEnum)[keyof typeof DsaProblemScalarFieldEnum];
export declare const TestCaseScalarFieldEnum: {
    readonly id: "id";
    readonly problemId: "problemId";
    readonly input: "input";
    readonly expectedOutput: "expectedOutput";
    readonly isHidden: "isHidden";
    readonly createdAt: "createdAt";
};
export type TestCaseScalarFieldEnum = (typeof TestCaseScalarFieldEnum)[keyof typeof TestCaseScalarFieldEnum];
export declare const McqSubmissionScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly questionId: "questionId";
    readonly selectedOptionIndex: "selectedOptionIndex";
    readonly isCorrect: "isCorrect";
    readonly pointsEarned: "pointsEarned";
    readonly submittedAt: "submittedAt";
};
export type McqSubmissionScalarFieldEnum = (typeof McqSubmissionScalarFieldEnum)[keyof typeof McqSubmissionScalarFieldEnum];
export declare const DsaSubmissionScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly questionId: "questionId";
    readonly code: "code";
    readonly language: "language";
    readonly status: "status";
    readonly pointsEarned: "pointsEarned";
    readonly testCasesPassed: "testCasesPassed";
    readonly totalTestCases: "totalTestCases";
    readonly executionTime: "executionTime";
    readonly submittedAt: "submittedAt";
};
export type DsaSubmissionScalarFieldEnum = (typeof DsaSubmissionScalarFieldEnum)[keyof typeof DsaSubmissionScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const JsonNullValueInput: {
    readonly JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
};
export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const JsonNullValueFilter: {
    readonly DbNull: import("@prisma/client-runtime-utils").DbNullClass;
    readonly JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
    readonly AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
};
export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];
//# sourceMappingURL=prismaNamespaceBrowser.d.ts.map