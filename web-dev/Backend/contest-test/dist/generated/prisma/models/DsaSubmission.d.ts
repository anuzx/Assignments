import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model DsaSubmission
 *
 */
export type DsaSubmissionModel = runtime.Types.Result.DefaultSelection<Prisma.$DsaSubmissionPayload>;
export type AggregateDsaSubmission = {
    _count: DsaSubmissionCountAggregateOutputType | null;
    _avg: DsaSubmissionAvgAggregateOutputType | null;
    _sum: DsaSubmissionSumAggregateOutputType | null;
    _min: DsaSubmissionMinAggregateOutputType | null;
    _max: DsaSubmissionMaxAggregateOutputType | null;
};
export type DsaSubmissionAvgAggregateOutputType = {
    pointsEarned: number | null;
    testCasesPassed: number | null;
    totalTestCases: number | null;
    executionTime: number | null;
};
export type DsaSubmissionSumAggregateOutputType = {
    pointsEarned: number | null;
    testCasesPassed: number | null;
    totalTestCases: number | null;
    executionTime: number | null;
};
export type DsaSubmissionMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    questionId: string | null;
    code: string | null;
    language: string | null;
    status: string | null;
    pointsEarned: number | null;
    testCasesPassed: number | null;
    totalTestCases: number | null;
    executionTime: number | null;
    submittedAt: Date | null;
};
export type DsaSubmissionMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    questionId: string | null;
    code: string | null;
    language: string | null;
    status: string | null;
    pointsEarned: number | null;
    testCasesPassed: number | null;
    totalTestCases: number | null;
    executionTime: number | null;
    submittedAt: Date | null;
};
export type DsaSubmissionCountAggregateOutputType = {
    id: number;
    userId: number;
    questionId: number;
    code: number;
    language: number;
    status: number;
    pointsEarned: number;
    testCasesPassed: number;
    totalTestCases: number;
    executionTime: number;
    submittedAt: number;
    _all: number;
};
export type DsaSubmissionAvgAggregateInputType = {
    pointsEarned?: true;
    testCasesPassed?: true;
    totalTestCases?: true;
    executionTime?: true;
};
export type DsaSubmissionSumAggregateInputType = {
    pointsEarned?: true;
    testCasesPassed?: true;
    totalTestCases?: true;
    executionTime?: true;
};
export type DsaSubmissionMinAggregateInputType = {
    id?: true;
    userId?: true;
    questionId?: true;
    code?: true;
    language?: true;
    status?: true;
    pointsEarned?: true;
    testCasesPassed?: true;
    totalTestCases?: true;
    executionTime?: true;
    submittedAt?: true;
};
export type DsaSubmissionMaxAggregateInputType = {
    id?: true;
    userId?: true;
    questionId?: true;
    code?: true;
    language?: true;
    status?: true;
    pointsEarned?: true;
    testCasesPassed?: true;
    totalTestCases?: true;
    executionTime?: true;
    submittedAt?: true;
};
export type DsaSubmissionCountAggregateInputType = {
    id?: true;
    userId?: true;
    questionId?: true;
    code?: true;
    language?: true;
    status?: true;
    pointsEarned?: true;
    testCasesPassed?: true;
    totalTestCases?: true;
    executionTime?: true;
    submittedAt?: true;
    _all?: true;
};
export type DsaSubmissionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which DsaSubmission to aggregate.
     */
    where?: Prisma.DsaSubmissionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of DsaSubmissions to fetch.
     */
    orderBy?: Prisma.DsaSubmissionOrderByWithRelationInput | Prisma.DsaSubmissionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.DsaSubmissionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` DsaSubmissions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` DsaSubmissions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned DsaSubmissions
    **/
    _count?: true | DsaSubmissionCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: DsaSubmissionAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: DsaSubmissionSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: DsaSubmissionMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: DsaSubmissionMaxAggregateInputType;
};
export type GetDsaSubmissionAggregateType<T extends DsaSubmissionAggregateArgs> = {
    [P in keyof T & keyof AggregateDsaSubmission]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateDsaSubmission[P]> : Prisma.GetScalarType<T[P], AggregateDsaSubmission[P]>;
};
export type DsaSubmissionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DsaSubmissionWhereInput;
    orderBy?: Prisma.DsaSubmissionOrderByWithAggregationInput | Prisma.DsaSubmissionOrderByWithAggregationInput[];
    by: Prisma.DsaSubmissionScalarFieldEnum[] | Prisma.DsaSubmissionScalarFieldEnum;
    having?: Prisma.DsaSubmissionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: DsaSubmissionCountAggregateInputType | true;
    _avg?: DsaSubmissionAvgAggregateInputType;
    _sum?: DsaSubmissionSumAggregateInputType;
    _min?: DsaSubmissionMinAggregateInputType;
    _max?: DsaSubmissionMaxAggregateInputType;
};
export type DsaSubmissionGroupByOutputType = {
    id: string;
    userId: string;
    questionId: string;
    code: string;
    language: string;
    status: string;
    pointsEarned: number;
    testCasesPassed: number;
    totalTestCases: number;
    executionTime: number;
    submittedAt: Date;
    _count: DsaSubmissionCountAggregateOutputType | null;
    _avg: DsaSubmissionAvgAggregateOutputType | null;
    _sum: DsaSubmissionSumAggregateOutputType | null;
    _min: DsaSubmissionMinAggregateOutputType | null;
    _max: DsaSubmissionMaxAggregateOutputType | null;
};
type GetDsaSubmissionGroupByPayload<T extends DsaSubmissionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<DsaSubmissionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof DsaSubmissionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], DsaSubmissionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], DsaSubmissionGroupByOutputType[P]>;
}>>;
export type DsaSubmissionWhereInput = {
    AND?: Prisma.DsaSubmissionWhereInput | Prisma.DsaSubmissionWhereInput[];
    OR?: Prisma.DsaSubmissionWhereInput[];
    NOT?: Prisma.DsaSubmissionWhereInput | Prisma.DsaSubmissionWhereInput[];
    id?: Prisma.StringFilter<"DsaSubmission"> | string;
    userId?: Prisma.StringFilter<"DsaSubmission"> | string;
    questionId?: Prisma.StringFilter<"DsaSubmission"> | string;
    code?: Prisma.StringFilter<"DsaSubmission"> | string;
    language?: Prisma.StringFilter<"DsaSubmission"> | string;
    status?: Prisma.StringFilter<"DsaSubmission"> | string;
    pointsEarned?: Prisma.IntFilter<"DsaSubmission"> | number;
    testCasesPassed?: Prisma.IntFilter<"DsaSubmission"> | number;
    totalTestCases?: Prisma.IntFilter<"DsaSubmission"> | number;
    executionTime?: Prisma.IntFilter<"DsaSubmission"> | number;
    submittedAt?: Prisma.DateTimeFilter<"DsaSubmission"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    dsaQuestion?: Prisma.XOR<Prisma.DsaProblemScalarRelationFilter, Prisma.DsaProblemWhereInput>;
};
export type DsaSubmissionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    questionId?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    language?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    pointsEarned?: Prisma.SortOrder;
    testCasesPassed?: Prisma.SortOrder;
    totalTestCases?: Prisma.SortOrder;
    executionTime?: Prisma.SortOrder;
    submittedAt?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    dsaQuestion?: Prisma.DsaProblemOrderByWithRelationInput;
};
export type DsaSubmissionWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.DsaSubmissionWhereInput | Prisma.DsaSubmissionWhereInput[];
    OR?: Prisma.DsaSubmissionWhereInput[];
    NOT?: Prisma.DsaSubmissionWhereInput | Prisma.DsaSubmissionWhereInput[];
    userId?: Prisma.StringFilter<"DsaSubmission"> | string;
    questionId?: Prisma.StringFilter<"DsaSubmission"> | string;
    code?: Prisma.StringFilter<"DsaSubmission"> | string;
    language?: Prisma.StringFilter<"DsaSubmission"> | string;
    status?: Prisma.StringFilter<"DsaSubmission"> | string;
    pointsEarned?: Prisma.IntFilter<"DsaSubmission"> | number;
    testCasesPassed?: Prisma.IntFilter<"DsaSubmission"> | number;
    totalTestCases?: Prisma.IntFilter<"DsaSubmission"> | number;
    executionTime?: Prisma.IntFilter<"DsaSubmission"> | number;
    submittedAt?: Prisma.DateTimeFilter<"DsaSubmission"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    dsaQuestion?: Prisma.XOR<Prisma.DsaProblemScalarRelationFilter, Prisma.DsaProblemWhereInput>;
}, "id">;
export type DsaSubmissionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    questionId?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    language?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    pointsEarned?: Prisma.SortOrder;
    testCasesPassed?: Prisma.SortOrder;
    totalTestCases?: Prisma.SortOrder;
    executionTime?: Prisma.SortOrder;
    submittedAt?: Prisma.SortOrder;
    _count?: Prisma.DsaSubmissionCountOrderByAggregateInput;
    _avg?: Prisma.DsaSubmissionAvgOrderByAggregateInput;
    _max?: Prisma.DsaSubmissionMaxOrderByAggregateInput;
    _min?: Prisma.DsaSubmissionMinOrderByAggregateInput;
    _sum?: Prisma.DsaSubmissionSumOrderByAggregateInput;
};
export type DsaSubmissionScalarWhereWithAggregatesInput = {
    AND?: Prisma.DsaSubmissionScalarWhereWithAggregatesInput | Prisma.DsaSubmissionScalarWhereWithAggregatesInput[];
    OR?: Prisma.DsaSubmissionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.DsaSubmissionScalarWhereWithAggregatesInput | Prisma.DsaSubmissionScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"DsaSubmission"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"DsaSubmission"> | string;
    questionId?: Prisma.StringWithAggregatesFilter<"DsaSubmission"> | string;
    code?: Prisma.StringWithAggregatesFilter<"DsaSubmission"> | string;
    language?: Prisma.StringWithAggregatesFilter<"DsaSubmission"> | string;
    status?: Prisma.StringWithAggregatesFilter<"DsaSubmission"> | string;
    pointsEarned?: Prisma.IntWithAggregatesFilter<"DsaSubmission"> | number;
    testCasesPassed?: Prisma.IntWithAggregatesFilter<"DsaSubmission"> | number;
    totalTestCases?: Prisma.IntWithAggregatesFilter<"DsaSubmission"> | number;
    executionTime?: Prisma.IntWithAggregatesFilter<"DsaSubmission"> | number;
    submittedAt?: Prisma.DateTimeWithAggregatesFilter<"DsaSubmission"> | Date | string;
};
export type DsaSubmissionCreateInput = {
    id?: string;
    code: string;
    language: string;
    status: string;
    pointsEarned?: number;
    testCasesPassed?: number;
    totalTestCases?: number;
    executionTime: number;
    submittedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutDsaSubmissionsInput;
    dsaQuestion: Prisma.DsaProblemCreateNestedOneWithoutDsaSubmissionsInput;
};
export type DsaSubmissionUncheckedCreateInput = {
    id?: string;
    userId: string;
    questionId: string;
    code: string;
    language: string;
    status: string;
    pointsEarned?: number;
    testCasesPassed?: number;
    totalTestCases?: number;
    executionTime: number;
    submittedAt?: Date | string;
};
export type DsaSubmissionUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    language?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    pointsEarned?: Prisma.IntFieldUpdateOperationsInput | number;
    testCasesPassed?: Prisma.IntFieldUpdateOperationsInput | number;
    totalTestCases?: Prisma.IntFieldUpdateOperationsInput | number;
    executionTime?: Prisma.IntFieldUpdateOperationsInput | number;
    submittedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutDsaSubmissionsNestedInput;
    dsaQuestion?: Prisma.DsaProblemUpdateOneRequiredWithoutDsaSubmissionsNestedInput;
};
export type DsaSubmissionUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    questionId?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    language?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    pointsEarned?: Prisma.IntFieldUpdateOperationsInput | number;
    testCasesPassed?: Prisma.IntFieldUpdateOperationsInput | number;
    totalTestCases?: Prisma.IntFieldUpdateOperationsInput | number;
    executionTime?: Prisma.IntFieldUpdateOperationsInput | number;
    submittedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DsaSubmissionCreateManyInput = {
    id?: string;
    userId: string;
    questionId: string;
    code: string;
    language: string;
    status: string;
    pointsEarned?: number;
    testCasesPassed?: number;
    totalTestCases?: number;
    executionTime: number;
    submittedAt?: Date | string;
};
export type DsaSubmissionUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    language?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    pointsEarned?: Prisma.IntFieldUpdateOperationsInput | number;
    testCasesPassed?: Prisma.IntFieldUpdateOperationsInput | number;
    totalTestCases?: Prisma.IntFieldUpdateOperationsInput | number;
    executionTime?: Prisma.IntFieldUpdateOperationsInput | number;
    submittedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DsaSubmissionUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    questionId?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    language?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    pointsEarned?: Prisma.IntFieldUpdateOperationsInput | number;
    testCasesPassed?: Prisma.IntFieldUpdateOperationsInput | number;
    totalTestCases?: Prisma.IntFieldUpdateOperationsInput | number;
    executionTime?: Prisma.IntFieldUpdateOperationsInput | number;
    submittedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DsaSubmissionListRelationFilter = {
    every?: Prisma.DsaSubmissionWhereInput;
    some?: Prisma.DsaSubmissionWhereInput;
    none?: Prisma.DsaSubmissionWhereInput;
};
export type DsaSubmissionOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type DsaSubmissionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    questionId?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    language?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    pointsEarned?: Prisma.SortOrder;
    testCasesPassed?: Prisma.SortOrder;
    totalTestCases?: Prisma.SortOrder;
    executionTime?: Prisma.SortOrder;
    submittedAt?: Prisma.SortOrder;
};
export type DsaSubmissionAvgOrderByAggregateInput = {
    pointsEarned?: Prisma.SortOrder;
    testCasesPassed?: Prisma.SortOrder;
    totalTestCases?: Prisma.SortOrder;
    executionTime?: Prisma.SortOrder;
};
export type DsaSubmissionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    questionId?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    language?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    pointsEarned?: Prisma.SortOrder;
    testCasesPassed?: Prisma.SortOrder;
    totalTestCases?: Prisma.SortOrder;
    executionTime?: Prisma.SortOrder;
    submittedAt?: Prisma.SortOrder;
};
export type DsaSubmissionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    questionId?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    language?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    pointsEarned?: Prisma.SortOrder;
    testCasesPassed?: Prisma.SortOrder;
    totalTestCases?: Prisma.SortOrder;
    executionTime?: Prisma.SortOrder;
    submittedAt?: Prisma.SortOrder;
};
export type DsaSubmissionSumOrderByAggregateInput = {
    pointsEarned?: Prisma.SortOrder;
    testCasesPassed?: Prisma.SortOrder;
    totalTestCases?: Prisma.SortOrder;
    executionTime?: Prisma.SortOrder;
};
export type DsaSubmissionCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.DsaSubmissionCreateWithoutUserInput, Prisma.DsaSubmissionUncheckedCreateWithoutUserInput> | Prisma.DsaSubmissionCreateWithoutUserInput[] | Prisma.DsaSubmissionUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.DsaSubmissionCreateOrConnectWithoutUserInput | Prisma.DsaSubmissionCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.DsaSubmissionCreateManyUserInputEnvelope;
    connect?: Prisma.DsaSubmissionWhereUniqueInput | Prisma.DsaSubmissionWhereUniqueInput[];
};
export type DsaSubmissionUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.DsaSubmissionCreateWithoutUserInput, Prisma.DsaSubmissionUncheckedCreateWithoutUserInput> | Prisma.DsaSubmissionCreateWithoutUserInput[] | Prisma.DsaSubmissionUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.DsaSubmissionCreateOrConnectWithoutUserInput | Prisma.DsaSubmissionCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.DsaSubmissionCreateManyUserInputEnvelope;
    connect?: Prisma.DsaSubmissionWhereUniqueInput | Prisma.DsaSubmissionWhereUniqueInput[];
};
export type DsaSubmissionUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.DsaSubmissionCreateWithoutUserInput, Prisma.DsaSubmissionUncheckedCreateWithoutUserInput> | Prisma.DsaSubmissionCreateWithoutUserInput[] | Prisma.DsaSubmissionUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.DsaSubmissionCreateOrConnectWithoutUserInput | Prisma.DsaSubmissionCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.DsaSubmissionUpsertWithWhereUniqueWithoutUserInput | Prisma.DsaSubmissionUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.DsaSubmissionCreateManyUserInputEnvelope;
    set?: Prisma.DsaSubmissionWhereUniqueInput | Prisma.DsaSubmissionWhereUniqueInput[];
    disconnect?: Prisma.DsaSubmissionWhereUniqueInput | Prisma.DsaSubmissionWhereUniqueInput[];
    delete?: Prisma.DsaSubmissionWhereUniqueInput | Prisma.DsaSubmissionWhereUniqueInput[];
    connect?: Prisma.DsaSubmissionWhereUniqueInput | Prisma.DsaSubmissionWhereUniqueInput[];
    update?: Prisma.DsaSubmissionUpdateWithWhereUniqueWithoutUserInput | Prisma.DsaSubmissionUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.DsaSubmissionUpdateManyWithWhereWithoutUserInput | Prisma.DsaSubmissionUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.DsaSubmissionScalarWhereInput | Prisma.DsaSubmissionScalarWhereInput[];
};
export type DsaSubmissionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.DsaSubmissionCreateWithoutUserInput, Prisma.DsaSubmissionUncheckedCreateWithoutUserInput> | Prisma.DsaSubmissionCreateWithoutUserInput[] | Prisma.DsaSubmissionUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.DsaSubmissionCreateOrConnectWithoutUserInput | Prisma.DsaSubmissionCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.DsaSubmissionUpsertWithWhereUniqueWithoutUserInput | Prisma.DsaSubmissionUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.DsaSubmissionCreateManyUserInputEnvelope;
    set?: Prisma.DsaSubmissionWhereUniqueInput | Prisma.DsaSubmissionWhereUniqueInput[];
    disconnect?: Prisma.DsaSubmissionWhereUniqueInput | Prisma.DsaSubmissionWhereUniqueInput[];
    delete?: Prisma.DsaSubmissionWhereUniqueInput | Prisma.DsaSubmissionWhereUniqueInput[];
    connect?: Prisma.DsaSubmissionWhereUniqueInput | Prisma.DsaSubmissionWhereUniqueInput[];
    update?: Prisma.DsaSubmissionUpdateWithWhereUniqueWithoutUserInput | Prisma.DsaSubmissionUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.DsaSubmissionUpdateManyWithWhereWithoutUserInput | Prisma.DsaSubmissionUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.DsaSubmissionScalarWhereInput | Prisma.DsaSubmissionScalarWhereInput[];
};
export type DsaSubmissionCreateNestedManyWithoutDsaQuestionInput = {
    create?: Prisma.XOR<Prisma.DsaSubmissionCreateWithoutDsaQuestionInput, Prisma.DsaSubmissionUncheckedCreateWithoutDsaQuestionInput> | Prisma.DsaSubmissionCreateWithoutDsaQuestionInput[] | Prisma.DsaSubmissionUncheckedCreateWithoutDsaQuestionInput[];
    connectOrCreate?: Prisma.DsaSubmissionCreateOrConnectWithoutDsaQuestionInput | Prisma.DsaSubmissionCreateOrConnectWithoutDsaQuestionInput[];
    createMany?: Prisma.DsaSubmissionCreateManyDsaQuestionInputEnvelope;
    connect?: Prisma.DsaSubmissionWhereUniqueInput | Prisma.DsaSubmissionWhereUniqueInput[];
};
export type DsaSubmissionUncheckedCreateNestedManyWithoutDsaQuestionInput = {
    create?: Prisma.XOR<Prisma.DsaSubmissionCreateWithoutDsaQuestionInput, Prisma.DsaSubmissionUncheckedCreateWithoutDsaQuestionInput> | Prisma.DsaSubmissionCreateWithoutDsaQuestionInput[] | Prisma.DsaSubmissionUncheckedCreateWithoutDsaQuestionInput[];
    connectOrCreate?: Prisma.DsaSubmissionCreateOrConnectWithoutDsaQuestionInput | Prisma.DsaSubmissionCreateOrConnectWithoutDsaQuestionInput[];
    createMany?: Prisma.DsaSubmissionCreateManyDsaQuestionInputEnvelope;
    connect?: Prisma.DsaSubmissionWhereUniqueInput | Prisma.DsaSubmissionWhereUniqueInput[];
};
export type DsaSubmissionUpdateManyWithoutDsaQuestionNestedInput = {
    create?: Prisma.XOR<Prisma.DsaSubmissionCreateWithoutDsaQuestionInput, Prisma.DsaSubmissionUncheckedCreateWithoutDsaQuestionInput> | Prisma.DsaSubmissionCreateWithoutDsaQuestionInput[] | Prisma.DsaSubmissionUncheckedCreateWithoutDsaQuestionInput[];
    connectOrCreate?: Prisma.DsaSubmissionCreateOrConnectWithoutDsaQuestionInput | Prisma.DsaSubmissionCreateOrConnectWithoutDsaQuestionInput[];
    upsert?: Prisma.DsaSubmissionUpsertWithWhereUniqueWithoutDsaQuestionInput | Prisma.DsaSubmissionUpsertWithWhereUniqueWithoutDsaQuestionInput[];
    createMany?: Prisma.DsaSubmissionCreateManyDsaQuestionInputEnvelope;
    set?: Prisma.DsaSubmissionWhereUniqueInput | Prisma.DsaSubmissionWhereUniqueInput[];
    disconnect?: Prisma.DsaSubmissionWhereUniqueInput | Prisma.DsaSubmissionWhereUniqueInput[];
    delete?: Prisma.DsaSubmissionWhereUniqueInput | Prisma.DsaSubmissionWhereUniqueInput[];
    connect?: Prisma.DsaSubmissionWhereUniqueInput | Prisma.DsaSubmissionWhereUniqueInput[];
    update?: Prisma.DsaSubmissionUpdateWithWhereUniqueWithoutDsaQuestionInput | Prisma.DsaSubmissionUpdateWithWhereUniqueWithoutDsaQuestionInput[];
    updateMany?: Prisma.DsaSubmissionUpdateManyWithWhereWithoutDsaQuestionInput | Prisma.DsaSubmissionUpdateManyWithWhereWithoutDsaQuestionInput[];
    deleteMany?: Prisma.DsaSubmissionScalarWhereInput | Prisma.DsaSubmissionScalarWhereInput[];
};
export type DsaSubmissionUncheckedUpdateManyWithoutDsaQuestionNestedInput = {
    create?: Prisma.XOR<Prisma.DsaSubmissionCreateWithoutDsaQuestionInput, Prisma.DsaSubmissionUncheckedCreateWithoutDsaQuestionInput> | Prisma.DsaSubmissionCreateWithoutDsaQuestionInput[] | Prisma.DsaSubmissionUncheckedCreateWithoutDsaQuestionInput[];
    connectOrCreate?: Prisma.DsaSubmissionCreateOrConnectWithoutDsaQuestionInput | Prisma.DsaSubmissionCreateOrConnectWithoutDsaQuestionInput[];
    upsert?: Prisma.DsaSubmissionUpsertWithWhereUniqueWithoutDsaQuestionInput | Prisma.DsaSubmissionUpsertWithWhereUniqueWithoutDsaQuestionInput[];
    createMany?: Prisma.DsaSubmissionCreateManyDsaQuestionInputEnvelope;
    set?: Prisma.DsaSubmissionWhereUniqueInput | Prisma.DsaSubmissionWhereUniqueInput[];
    disconnect?: Prisma.DsaSubmissionWhereUniqueInput | Prisma.DsaSubmissionWhereUniqueInput[];
    delete?: Prisma.DsaSubmissionWhereUniqueInput | Prisma.DsaSubmissionWhereUniqueInput[];
    connect?: Prisma.DsaSubmissionWhereUniqueInput | Prisma.DsaSubmissionWhereUniqueInput[];
    update?: Prisma.DsaSubmissionUpdateWithWhereUniqueWithoutDsaQuestionInput | Prisma.DsaSubmissionUpdateWithWhereUniqueWithoutDsaQuestionInput[];
    updateMany?: Prisma.DsaSubmissionUpdateManyWithWhereWithoutDsaQuestionInput | Prisma.DsaSubmissionUpdateManyWithWhereWithoutDsaQuestionInput[];
    deleteMany?: Prisma.DsaSubmissionScalarWhereInput | Prisma.DsaSubmissionScalarWhereInput[];
};
export type DsaSubmissionCreateWithoutUserInput = {
    id?: string;
    code: string;
    language: string;
    status: string;
    pointsEarned?: number;
    testCasesPassed?: number;
    totalTestCases?: number;
    executionTime: number;
    submittedAt?: Date | string;
    dsaQuestion: Prisma.DsaProblemCreateNestedOneWithoutDsaSubmissionsInput;
};
export type DsaSubmissionUncheckedCreateWithoutUserInput = {
    id?: string;
    questionId: string;
    code: string;
    language: string;
    status: string;
    pointsEarned?: number;
    testCasesPassed?: number;
    totalTestCases?: number;
    executionTime: number;
    submittedAt?: Date | string;
};
export type DsaSubmissionCreateOrConnectWithoutUserInput = {
    where: Prisma.DsaSubmissionWhereUniqueInput;
    create: Prisma.XOR<Prisma.DsaSubmissionCreateWithoutUserInput, Prisma.DsaSubmissionUncheckedCreateWithoutUserInput>;
};
export type DsaSubmissionCreateManyUserInputEnvelope = {
    data: Prisma.DsaSubmissionCreateManyUserInput | Prisma.DsaSubmissionCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type DsaSubmissionUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.DsaSubmissionWhereUniqueInput;
    update: Prisma.XOR<Prisma.DsaSubmissionUpdateWithoutUserInput, Prisma.DsaSubmissionUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.DsaSubmissionCreateWithoutUserInput, Prisma.DsaSubmissionUncheckedCreateWithoutUserInput>;
};
export type DsaSubmissionUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.DsaSubmissionWhereUniqueInput;
    data: Prisma.XOR<Prisma.DsaSubmissionUpdateWithoutUserInput, Prisma.DsaSubmissionUncheckedUpdateWithoutUserInput>;
};
export type DsaSubmissionUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.DsaSubmissionScalarWhereInput;
    data: Prisma.XOR<Prisma.DsaSubmissionUpdateManyMutationInput, Prisma.DsaSubmissionUncheckedUpdateManyWithoutUserInput>;
};
export type DsaSubmissionScalarWhereInput = {
    AND?: Prisma.DsaSubmissionScalarWhereInput | Prisma.DsaSubmissionScalarWhereInput[];
    OR?: Prisma.DsaSubmissionScalarWhereInput[];
    NOT?: Prisma.DsaSubmissionScalarWhereInput | Prisma.DsaSubmissionScalarWhereInput[];
    id?: Prisma.StringFilter<"DsaSubmission"> | string;
    userId?: Prisma.StringFilter<"DsaSubmission"> | string;
    questionId?: Prisma.StringFilter<"DsaSubmission"> | string;
    code?: Prisma.StringFilter<"DsaSubmission"> | string;
    language?: Prisma.StringFilter<"DsaSubmission"> | string;
    status?: Prisma.StringFilter<"DsaSubmission"> | string;
    pointsEarned?: Prisma.IntFilter<"DsaSubmission"> | number;
    testCasesPassed?: Prisma.IntFilter<"DsaSubmission"> | number;
    totalTestCases?: Prisma.IntFilter<"DsaSubmission"> | number;
    executionTime?: Prisma.IntFilter<"DsaSubmission"> | number;
    submittedAt?: Prisma.DateTimeFilter<"DsaSubmission"> | Date | string;
};
export type DsaSubmissionCreateWithoutDsaQuestionInput = {
    id?: string;
    code: string;
    language: string;
    status: string;
    pointsEarned?: number;
    testCasesPassed?: number;
    totalTestCases?: number;
    executionTime: number;
    submittedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutDsaSubmissionsInput;
};
export type DsaSubmissionUncheckedCreateWithoutDsaQuestionInput = {
    id?: string;
    userId: string;
    code: string;
    language: string;
    status: string;
    pointsEarned?: number;
    testCasesPassed?: number;
    totalTestCases?: number;
    executionTime: number;
    submittedAt?: Date | string;
};
export type DsaSubmissionCreateOrConnectWithoutDsaQuestionInput = {
    where: Prisma.DsaSubmissionWhereUniqueInput;
    create: Prisma.XOR<Prisma.DsaSubmissionCreateWithoutDsaQuestionInput, Prisma.DsaSubmissionUncheckedCreateWithoutDsaQuestionInput>;
};
export type DsaSubmissionCreateManyDsaQuestionInputEnvelope = {
    data: Prisma.DsaSubmissionCreateManyDsaQuestionInput | Prisma.DsaSubmissionCreateManyDsaQuestionInput[];
    skipDuplicates?: boolean;
};
export type DsaSubmissionUpsertWithWhereUniqueWithoutDsaQuestionInput = {
    where: Prisma.DsaSubmissionWhereUniqueInput;
    update: Prisma.XOR<Prisma.DsaSubmissionUpdateWithoutDsaQuestionInput, Prisma.DsaSubmissionUncheckedUpdateWithoutDsaQuestionInput>;
    create: Prisma.XOR<Prisma.DsaSubmissionCreateWithoutDsaQuestionInput, Prisma.DsaSubmissionUncheckedCreateWithoutDsaQuestionInput>;
};
export type DsaSubmissionUpdateWithWhereUniqueWithoutDsaQuestionInput = {
    where: Prisma.DsaSubmissionWhereUniqueInput;
    data: Prisma.XOR<Prisma.DsaSubmissionUpdateWithoutDsaQuestionInput, Prisma.DsaSubmissionUncheckedUpdateWithoutDsaQuestionInput>;
};
export type DsaSubmissionUpdateManyWithWhereWithoutDsaQuestionInput = {
    where: Prisma.DsaSubmissionScalarWhereInput;
    data: Prisma.XOR<Prisma.DsaSubmissionUpdateManyMutationInput, Prisma.DsaSubmissionUncheckedUpdateManyWithoutDsaQuestionInput>;
};
export type DsaSubmissionCreateManyUserInput = {
    id?: string;
    questionId: string;
    code: string;
    language: string;
    status: string;
    pointsEarned?: number;
    testCasesPassed?: number;
    totalTestCases?: number;
    executionTime: number;
    submittedAt?: Date | string;
};
export type DsaSubmissionUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    language?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    pointsEarned?: Prisma.IntFieldUpdateOperationsInput | number;
    testCasesPassed?: Prisma.IntFieldUpdateOperationsInput | number;
    totalTestCases?: Prisma.IntFieldUpdateOperationsInput | number;
    executionTime?: Prisma.IntFieldUpdateOperationsInput | number;
    submittedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dsaQuestion?: Prisma.DsaProblemUpdateOneRequiredWithoutDsaSubmissionsNestedInput;
};
export type DsaSubmissionUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    questionId?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    language?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    pointsEarned?: Prisma.IntFieldUpdateOperationsInput | number;
    testCasesPassed?: Prisma.IntFieldUpdateOperationsInput | number;
    totalTestCases?: Prisma.IntFieldUpdateOperationsInput | number;
    executionTime?: Prisma.IntFieldUpdateOperationsInput | number;
    submittedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DsaSubmissionUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    questionId?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    language?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    pointsEarned?: Prisma.IntFieldUpdateOperationsInput | number;
    testCasesPassed?: Prisma.IntFieldUpdateOperationsInput | number;
    totalTestCases?: Prisma.IntFieldUpdateOperationsInput | number;
    executionTime?: Prisma.IntFieldUpdateOperationsInput | number;
    submittedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DsaSubmissionCreateManyDsaQuestionInput = {
    id?: string;
    userId: string;
    code: string;
    language: string;
    status: string;
    pointsEarned?: number;
    testCasesPassed?: number;
    totalTestCases?: number;
    executionTime: number;
    submittedAt?: Date | string;
};
export type DsaSubmissionUpdateWithoutDsaQuestionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    language?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    pointsEarned?: Prisma.IntFieldUpdateOperationsInput | number;
    testCasesPassed?: Prisma.IntFieldUpdateOperationsInput | number;
    totalTestCases?: Prisma.IntFieldUpdateOperationsInput | number;
    executionTime?: Prisma.IntFieldUpdateOperationsInput | number;
    submittedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutDsaSubmissionsNestedInput;
};
export type DsaSubmissionUncheckedUpdateWithoutDsaQuestionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    language?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    pointsEarned?: Prisma.IntFieldUpdateOperationsInput | number;
    testCasesPassed?: Prisma.IntFieldUpdateOperationsInput | number;
    totalTestCases?: Prisma.IntFieldUpdateOperationsInput | number;
    executionTime?: Prisma.IntFieldUpdateOperationsInput | number;
    submittedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DsaSubmissionUncheckedUpdateManyWithoutDsaQuestionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    language?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    pointsEarned?: Prisma.IntFieldUpdateOperationsInput | number;
    testCasesPassed?: Prisma.IntFieldUpdateOperationsInput | number;
    totalTestCases?: Prisma.IntFieldUpdateOperationsInput | number;
    executionTime?: Prisma.IntFieldUpdateOperationsInput | number;
    submittedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DsaSubmissionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    questionId?: boolean;
    code?: boolean;
    language?: boolean;
    status?: boolean;
    pointsEarned?: boolean;
    testCasesPassed?: boolean;
    totalTestCases?: boolean;
    executionTime?: boolean;
    submittedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    dsaQuestion?: boolean | Prisma.DsaProblemDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["dsaSubmission"]>;
export type DsaSubmissionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    questionId?: boolean;
    code?: boolean;
    language?: boolean;
    status?: boolean;
    pointsEarned?: boolean;
    testCasesPassed?: boolean;
    totalTestCases?: boolean;
    executionTime?: boolean;
    submittedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    dsaQuestion?: boolean | Prisma.DsaProblemDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["dsaSubmission"]>;
export type DsaSubmissionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    questionId?: boolean;
    code?: boolean;
    language?: boolean;
    status?: boolean;
    pointsEarned?: boolean;
    testCasesPassed?: boolean;
    totalTestCases?: boolean;
    executionTime?: boolean;
    submittedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    dsaQuestion?: boolean | Prisma.DsaProblemDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["dsaSubmission"]>;
export type DsaSubmissionSelectScalar = {
    id?: boolean;
    userId?: boolean;
    questionId?: boolean;
    code?: boolean;
    language?: boolean;
    status?: boolean;
    pointsEarned?: boolean;
    testCasesPassed?: boolean;
    totalTestCases?: boolean;
    executionTime?: boolean;
    submittedAt?: boolean;
};
export type DsaSubmissionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "questionId" | "code" | "language" | "status" | "pointsEarned" | "testCasesPassed" | "totalTestCases" | "executionTime" | "submittedAt", ExtArgs["result"]["dsaSubmission"]>;
export type DsaSubmissionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    dsaQuestion?: boolean | Prisma.DsaProblemDefaultArgs<ExtArgs>;
};
export type DsaSubmissionIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    dsaQuestion?: boolean | Prisma.DsaProblemDefaultArgs<ExtArgs>;
};
export type DsaSubmissionIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    dsaQuestion?: boolean | Prisma.DsaProblemDefaultArgs<ExtArgs>;
};
export type $DsaSubmissionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "DsaSubmission";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        dsaQuestion: Prisma.$DsaProblemPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string;
        questionId: string;
        code: string;
        language: string;
        status: string;
        pointsEarned: number;
        testCasesPassed: number;
        totalTestCases: number;
        executionTime: number;
        submittedAt: Date;
    }, ExtArgs["result"]["dsaSubmission"]>;
    composites: {};
};
export type DsaSubmissionGetPayload<S extends boolean | null | undefined | DsaSubmissionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$DsaSubmissionPayload, S>;
export type DsaSubmissionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<DsaSubmissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: DsaSubmissionCountAggregateInputType | true;
};
export interface DsaSubmissionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['DsaSubmission'];
        meta: {
            name: 'DsaSubmission';
        };
    };
    /**
     * Find zero or one DsaSubmission that matches the filter.
     * @param {DsaSubmissionFindUniqueArgs} args - Arguments to find a DsaSubmission
     * @example
     * // Get one DsaSubmission
     * const dsaSubmission = await prisma.dsaSubmission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DsaSubmissionFindUniqueArgs>(args: Prisma.SelectSubset<T, DsaSubmissionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__DsaSubmissionClient<runtime.Types.Result.GetResult<Prisma.$DsaSubmissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one DsaSubmission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DsaSubmissionFindUniqueOrThrowArgs} args - Arguments to find a DsaSubmission
     * @example
     * // Get one DsaSubmission
     * const dsaSubmission = await prisma.dsaSubmission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DsaSubmissionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, DsaSubmissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__DsaSubmissionClient<runtime.Types.Result.GetResult<Prisma.$DsaSubmissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first DsaSubmission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DsaSubmissionFindFirstArgs} args - Arguments to find a DsaSubmission
     * @example
     * // Get one DsaSubmission
     * const dsaSubmission = await prisma.dsaSubmission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DsaSubmissionFindFirstArgs>(args?: Prisma.SelectSubset<T, DsaSubmissionFindFirstArgs<ExtArgs>>): Prisma.Prisma__DsaSubmissionClient<runtime.Types.Result.GetResult<Prisma.$DsaSubmissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first DsaSubmission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DsaSubmissionFindFirstOrThrowArgs} args - Arguments to find a DsaSubmission
     * @example
     * // Get one DsaSubmission
     * const dsaSubmission = await prisma.dsaSubmission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DsaSubmissionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, DsaSubmissionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__DsaSubmissionClient<runtime.Types.Result.GetResult<Prisma.$DsaSubmissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more DsaSubmissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DsaSubmissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DsaSubmissions
     * const dsaSubmissions = await prisma.dsaSubmission.findMany()
     *
     * // Get first 10 DsaSubmissions
     * const dsaSubmissions = await prisma.dsaSubmission.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const dsaSubmissionWithIdOnly = await prisma.dsaSubmission.findMany({ select: { id: true } })
     *
     */
    findMany<T extends DsaSubmissionFindManyArgs>(args?: Prisma.SelectSubset<T, DsaSubmissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DsaSubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a DsaSubmission.
     * @param {DsaSubmissionCreateArgs} args - Arguments to create a DsaSubmission.
     * @example
     * // Create one DsaSubmission
     * const DsaSubmission = await prisma.dsaSubmission.create({
     *   data: {
     *     // ... data to create a DsaSubmission
     *   }
     * })
     *
     */
    create<T extends DsaSubmissionCreateArgs>(args: Prisma.SelectSubset<T, DsaSubmissionCreateArgs<ExtArgs>>): Prisma.Prisma__DsaSubmissionClient<runtime.Types.Result.GetResult<Prisma.$DsaSubmissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many DsaSubmissions.
     * @param {DsaSubmissionCreateManyArgs} args - Arguments to create many DsaSubmissions.
     * @example
     * // Create many DsaSubmissions
     * const dsaSubmission = await prisma.dsaSubmission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends DsaSubmissionCreateManyArgs>(args?: Prisma.SelectSubset<T, DsaSubmissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many DsaSubmissions and returns the data saved in the database.
     * @param {DsaSubmissionCreateManyAndReturnArgs} args - Arguments to create many DsaSubmissions.
     * @example
     * // Create many DsaSubmissions
     * const dsaSubmission = await prisma.dsaSubmission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many DsaSubmissions and only return the `id`
     * const dsaSubmissionWithIdOnly = await prisma.dsaSubmission.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends DsaSubmissionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, DsaSubmissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DsaSubmissionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a DsaSubmission.
     * @param {DsaSubmissionDeleteArgs} args - Arguments to delete one DsaSubmission.
     * @example
     * // Delete one DsaSubmission
     * const DsaSubmission = await prisma.dsaSubmission.delete({
     *   where: {
     *     // ... filter to delete one DsaSubmission
     *   }
     * })
     *
     */
    delete<T extends DsaSubmissionDeleteArgs>(args: Prisma.SelectSubset<T, DsaSubmissionDeleteArgs<ExtArgs>>): Prisma.Prisma__DsaSubmissionClient<runtime.Types.Result.GetResult<Prisma.$DsaSubmissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one DsaSubmission.
     * @param {DsaSubmissionUpdateArgs} args - Arguments to update one DsaSubmission.
     * @example
     * // Update one DsaSubmission
     * const dsaSubmission = await prisma.dsaSubmission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends DsaSubmissionUpdateArgs>(args: Prisma.SelectSubset<T, DsaSubmissionUpdateArgs<ExtArgs>>): Prisma.Prisma__DsaSubmissionClient<runtime.Types.Result.GetResult<Prisma.$DsaSubmissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more DsaSubmissions.
     * @param {DsaSubmissionDeleteManyArgs} args - Arguments to filter DsaSubmissions to delete.
     * @example
     * // Delete a few DsaSubmissions
     * const { count } = await prisma.dsaSubmission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends DsaSubmissionDeleteManyArgs>(args?: Prisma.SelectSubset<T, DsaSubmissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more DsaSubmissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DsaSubmissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DsaSubmissions
     * const dsaSubmission = await prisma.dsaSubmission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends DsaSubmissionUpdateManyArgs>(args: Prisma.SelectSubset<T, DsaSubmissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more DsaSubmissions and returns the data updated in the database.
     * @param {DsaSubmissionUpdateManyAndReturnArgs} args - Arguments to update many DsaSubmissions.
     * @example
     * // Update many DsaSubmissions
     * const dsaSubmission = await prisma.dsaSubmission.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more DsaSubmissions and only return the `id`
     * const dsaSubmissionWithIdOnly = await prisma.dsaSubmission.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends DsaSubmissionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, DsaSubmissionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DsaSubmissionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one DsaSubmission.
     * @param {DsaSubmissionUpsertArgs} args - Arguments to update or create a DsaSubmission.
     * @example
     * // Update or create a DsaSubmission
     * const dsaSubmission = await prisma.dsaSubmission.upsert({
     *   create: {
     *     // ... data to create a DsaSubmission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DsaSubmission we want to update
     *   }
     * })
     */
    upsert<T extends DsaSubmissionUpsertArgs>(args: Prisma.SelectSubset<T, DsaSubmissionUpsertArgs<ExtArgs>>): Prisma.Prisma__DsaSubmissionClient<runtime.Types.Result.GetResult<Prisma.$DsaSubmissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of DsaSubmissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DsaSubmissionCountArgs} args - Arguments to filter DsaSubmissions to count.
     * @example
     * // Count the number of DsaSubmissions
     * const count = await prisma.dsaSubmission.count({
     *   where: {
     *     // ... the filter for the DsaSubmissions we want to count
     *   }
     * })
    **/
    count<T extends DsaSubmissionCountArgs>(args?: Prisma.Subset<T, DsaSubmissionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], DsaSubmissionCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a DsaSubmission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DsaSubmissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DsaSubmissionAggregateArgs>(args: Prisma.Subset<T, DsaSubmissionAggregateArgs>): Prisma.PrismaPromise<GetDsaSubmissionAggregateType<T>>;
    /**
     * Group by DsaSubmission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DsaSubmissionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends DsaSubmissionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: DsaSubmissionGroupByArgs['orderBy'];
    } : {
        orderBy?: DsaSubmissionGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, DsaSubmissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDsaSubmissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the DsaSubmission model
     */
    readonly fields: DsaSubmissionFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for DsaSubmission.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__DsaSubmissionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    dsaQuestion<T extends Prisma.DsaProblemDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.DsaProblemDefaultArgs<ExtArgs>>): Prisma.Prisma__DsaProblemClient<runtime.Types.Result.GetResult<Prisma.$DsaProblemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the DsaSubmission model
 */
export interface DsaSubmissionFieldRefs {
    readonly id: Prisma.FieldRef<"DsaSubmission", 'String'>;
    readonly userId: Prisma.FieldRef<"DsaSubmission", 'String'>;
    readonly questionId: Prisma.FieldRef<"DsaSubmission", 'String'>;
    readonly code: Prisma.FieldRef<"DsaSubmission", 'String'>;
    readonly language: Prisma.FieldRef<"DsaSubmission", 'String'>;
    readonly status: Prisma.FieldRef<"DsaSubmission", 'String'>;
    readonly pointsEarned: Prisma.FieldRef<"DsaSubmission", 'Int'>;
    readonly testCasesPassed: Prisma.FieldRef<"DsaSubmission", 'Int'>;
    readonly totalTestCases: Prisma.FieldRef<"DsaSubmission", 'Int'>;
    readonly executionTime: Prisma.FieldRef<"DsaSubmission", 'Int'>;
    readonly submittedAt: Prisma.FieldRef<"DsaSubmission", 'DateTime'>;
}
/**
 * DsaSubmission findUnique
 */
export type DsaSubmissionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DsaSubmission
     */
    select?: Prisma.DsaSubmissionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DsaSubmission
     */
    omit?: Prisma.DsaSubmissionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DsaSubmissionInclude<ExtArgs> | null;
    /**
     * Filter, which DsaSubmission to fetch.
     */
    where: Prisma.DsaSubmissionWhereUniqueInput;
};
/**
 * DsaSubmission findUniqueOrThrow
 */
export type DsaSubmissionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DsaSubmission
     */
    select?: Prisma.DsaSubmissionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DsaSubmission
     */
    omit?: Prisma.DsaSubmissionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DsaSubmissionInclude<ExtArgs> | null;
    /**
     * Filter, which DsaSubmission to fetch.
     */
    where: Prisma.DsaSubmissionWhereUniqueInput;
};
/**
 * DsaSubmission findFirst
 */
export type DsaSubmissionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DsaSubmission
     */
    select?: Prisma.DsaSubmissionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DsaSubmission
     */
    omit?: Prisma.DsaSubmissionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DsaSubmissionInclude<ExtArgs> | null;
    /**
     * Filter, which DsaSubmission to fetch.
     */
    where?: Prisma.DsaSubmissionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of DsaSubmissions to fetch.
     */
    orderBy?: Prisma.DsaSubmissionOrderByWithRelationInput | Prisma.DsaSubmissionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for DsaSubmissions.
     */
    cursor?: Prisma.DsaSubmissionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` DsaSubmissions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` DsaSubmissions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of DsaSubmissions.
     */
    distinct?: Prisma.DsaSubmissionScalarFieldEnum | Prisma.DsaSubmissionScalarFieldEnum[];
};
/**
 * DsaSubmission findFirstOrThrow
 */
export type DsaSubmissionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DsaSubmission
     */
    select?: Prisma.DsaSubmissionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DsaSubmission
     */
    omit?: Prisma.DsaSubmissionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DsaSubmissionInclude<ExtArgs> | null;
    /**
     * Filter, which DsaSubmission to fetch.
     */
    where?: Prisma.DsaSubmissionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of DsaSubmissions to fetch.
     */
    orderBy?: Prisma.DsaSubmissionOrderByWithRelationInput | Prisma.DsaSubmissionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for DsaSubmissions.
     */
    cursor?: Prisma.DsaSubmissionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` DsaSubmissions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` DsaSubmissions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of DsaSubmissions.
     */
    distinct?: Prisma.DsaSubmissionScalarFieldEnum | Prisma.DsaSubmissionScalarFieldEnum[];
};
/**
 * DsaSubmission findMany
 */
export type DsaSubmissionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DsaSubmission
     */
    select?: Prisma.DsaSubmissionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DsaSubmission
     */
    omit?: Prisma.DsaSubmissionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DsaSubmissionInclude<ExtArgs> | null;
    /**
     * Filter, which DsaSubmissions to fetch.
     */
    where?: Prisma.DsaSubmissionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of DsaSubmissions to fetch.
     */
    orderBy?: Prisma.DsaSubmissionOrderByWithRelationInput | Prisma.DsaSubmissionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing DsaSubmissions.
     */
    cursor?: Prisma.DsaSubmissionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` DsaSubmissions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` DsaSubmissions.
     */
    skip?: number;
    distinct?: Prisma.DsaSubmissionScalarFieldEnum | Prisma.DsaSubmissionScalarFieldEnum[];
};
/**
 * DsaSubmission create
 */
export type DsaSubmissionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DsaSubmission
     */
    select?: Prisma.DsaSubmissionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DsaSubmission
     */
    omit?: Prisma.DsaSubmissionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DsaSubmissionInclude<ExtArgs> | null;
    /**
     * The data needed to create a DsaSubmission.
     */
    data: Prisma.XOR<Prisma.DsaSubmissionCreateInput, Prisma.DsaSubmissionUncheckedCreateInput>;
};
/**
 * DsaSubmission createMany
 */
export type DsaSubmissionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many DsaSubmissions.
     */
    data: Prisma.DsaSubmissionCreateManyInput | Prisma.DsaSubmissionCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * DsaSubmission createManyAndReturn
 */
export type DsaSubmissionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DsaSubmission
     */
    select?: Prisma.DsaSubmissionSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the DsaSubmission
     */
    omit?: Prisma.DsaSubmissionOmit<ExtArgs> | null;
    /**
     * The data used to create many DsaSubmissions.
     */
    data: Prisma.DsaSubmissionCreateManyInput | Prisma.DsaSubmissionCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DsaSubmissionIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * DsaSubmission update
 */
export type DsaSubmissionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DsaSubmission
     */
    select?: Prisma.DsaSubmissionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DsaSubmission
     */
    omit?: Prisma.DsaSubmissionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DsaSubmissionInclude<ExtArgs> | null;
    /**
     * The data needed to update a DsaSubmission.
     */
    data: Prisma.XOR<Prisma.DsaSubmissionUpdateInput, Prisma.DsaSubmissionUncheckedUpdateInput>;
    /**
     * Choose, which DsaSubmission to update.
     */
    where: Prisma.DsaSubmissionWhereUniqueInput;
};
/**
 * DsaSubmission updateMany
 */
export type DsaSubmissionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update DsaSubmissions.
     */
    data: Prisma.XOR<Prisma.DsaSubmissionUpdateManyMutationInput, Prisma.DsaSubmissionUncheckedUpdateManyInput>;
    /**
     * Filter which DsaSubmissions to update
     */
    where?: Prisma.DsaSubmissionWhereInput;
    /**
     * Limit how many DsaSubmissions to update.
     */
    limit?: number;
};
/**
 * DsaSubmission updateManyAndReturn
 */
export type DsaSubmissionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DsaSubmission
     */
    select?: Prisma.DsaSubmissionSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the DsaSubmission
     */
    omit?: Prisma.DsaSubmissionOmit<ExtArgs> | null;
    /**
     * The data used to update DsaSubmissions.
     */
    data: Prisma.XOR<Prisma.DsaSubmissionUpdateManyMutationInput, Prisma.DsaSubmissionUncheckedUpdateManyInput>;
    /**
     * Filter which DsaSubmissions to update
     */
    where?: Prisma.DsaSubmissionWhereInput;
    /**
     * Limit how many DsaSubmissions to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DsaSubmissionIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * DsaSubmission upsert
 */
export type DsaSubmissionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DsaSubmission
     */
    select?: Prisma.DsaSubmissionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DsaSubmission
     */
    omit?: Prisma.DsaSubmissionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DsaSubmissionInclude<ExtArgs> | null;
    /**
     * The filter to search for the DsaSubmission to update in case it exists.
     */
    where: Prisma.DsaSubmissionWhereUniqueInput;
    /**
     * In case the DsaSubmission found by the `where` argument doesn't exist, create a new DsaSubmission with this data.
     */
    create: Prisma.XOR<Prisma.DsaSubmissionCreateInput, Prisma.DsaSubmissionUncheckedCreateInput>;
    /**
     * In case the DsaSubmission was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.DsaSubmissionUpdateInput, Prisma.DsaSubmissionUncheckedUpdateInput>;
};
/**
 * DsaSubmission delete
 */
export type DsaSubmissionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DsaSubmission
     */
    select?: Prisma.DsaSubmissionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DsaSubmission
     */
    omit?: Prisma.DsaSubmissionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DsaSubmissionInclude<ExtArgs> | null;
    /**
     * Filter which DsaSubmission to delete.
     */
    where: Prisma.DsaSubmissionWhereUniqueInput;
};
/**
 * DsaSubmission deleteMany
 */
export type DsaSubmissionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which DsaSubmissions to delete
     */
    where?: Prisma.DsaSubmissionWhereInput;
    /**
     * Limit how many DsaSubmissions to delete.
     */
    limit?: number;
};
/**
 * DsaSubmission without action
 */
export type DsaSubmissionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DsaSubmission
     */
    select?: Prisma.DsaSubmissionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DsaSubmission
     */
    omit?: Prisma.DsaSubmissionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DsaSubmissionInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=DsaSubmission.d.ts.map