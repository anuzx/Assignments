import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model McqSubmission
 *
 */
export type McqSubmissionModel = runtime.Types.Result.DefaultSelection<Prisma.$McqSubmissionPayload>;
export type AggregateMcqSubmission = {
    _count: McqSubmissionCountAggregateOutputType | null;
    _avg: McqSubmissionAvgAggregateOutputType | null;
    _sum: McqSubmissionSumAggregateOutputType | null;
    _min: McqSubmissionMinAggregateOutputType | null;
    _max: McqSubmissionMaxAggregateOutputType | null;
};
export type McqSubmissionAvgAggregateOutputType = {
    selectedOptionIndex: number | null;
    pointsEarned: number | null;
};
export type McqSubmissionSumAggregateOutputType = {
    selectedOptionIndex: number | null;
    pointsEarned: number | null;
};
export type McqSubmissionMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    questionId: string | null;
    selectedOptionIndex: number | null;
    isCorrect: boolean | null;
    pointsEarned: number | null;
    submittedAt: Date | null;
};
export type McqSubmissionMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    questionId: string | null;
    selectedOptionIndex: number | null;
    isCorrect: boolean | null;
    pointsEarned: number | null;
    submittedAt: Date | null;
};
export type McqSubmissionCountAggregateOutputType = {
    id: number;
    userId: number;
    questionId: number;
    selectedOptionIndex: number;
    isCorrect: number;
    pointsEarned: number;
    submittedAt: number;
    _all: number;
};
export type McqSubmissionAvgAggregateInputType = {
    selectedOptionIndex?: true;
    pointsEarned?: true;
};
export type McqSubmissionSumAggregateInputType = {
    selectedOptionIndex?: true;
    pointsEarned?: true;
};
export type McqSubmissionMinAggregateInputType = {
    id?: true;
    userId?: true;
    questionId?: true;
    selectedOptionIndex?: true;
    isCorrect?: true;
    pointsEarned?: true;
    submittedAt?: true;
};
export type McqSubmissionMaxAggregateInputType = {
    id?: true;
    userId?: true;
    questionId?: true;
    selectedOptionIndex?: true;
    isCorrect?: true;
    pointsEarned?: true;
    submittedAt?: true;
};
export type McqSubmissionCountAggregateInputType = {
    id?: true;
    userId?: true;
    questionId?: true;
    selectedOptionIndex?: true;
    isCorrect?: true;
    pointsEarned?: true;
    submittedAt?: true;
    _all?: true;
};
export type McqSubmissionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which McqSubmission to aggregate.
     */
    where?: Prisma.McqSubmissionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of McqSubmissions to fetch.
     */
    orderBy?: Prisma.McqSubmissionOrderByWithRelationInput | Prisma.McqSubmissionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.McqSubmissionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` McqSubmissions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` McqSubmissions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned McqSubmissions
    **/
    _count?: true | McqSubmissionCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: McqSubmissionAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: McqSubmissionSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: McqSubmissionMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: McqSubmissionMaxAggregateInputType;
};
export type GetMcqSubmissionAggregateType<T extends McqSubmissionAggregateArgs> = {
    [P in keyof T & keyof AggregateMcqSubmission]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMcqSubmission[P]> : Prisma.GetScalarType<T[P], AggregateMcqSubmission[P]>;
};
export type McqSubmissionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.McqSubmissionWhereInput;
    orderBy?: Prisma.McqSubmissionOrderByWithAggregationInput | Prisma.McqSubmissionOrderByWithAggregationInput[];
    by: Prisma.McqSubmissionScalarFieldEnum[] | Prisma.McqSubmissionScalarFieldEnum;
    having?: Prisma.McqSubmissionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: McqSubmissionCountAggregateInputType | true;
    _avg?: McqSubmissionAvgAggregateInputType;
    _sum?: McqSubmissionSumAggregateInputType;
    _min?: McqSubmissionMinAggregateInputType;
    _max?: McqSubmissionMaxAggregateInputType;
};
export type McqSubmissionGroupByOutputType = {
    id: string;
    userId: string;
    questionId: string;
    selectedOptionIndex: number;
    isCorrect: boolean;
    pointsEarned: number;
    submittedAt: Date;
    _count: McqSubmissionCountAggregateOutputType | null;
    _avg: McqSubmissionAvgAggregateOutputType | null;
    _sum: McqSubmissionSumAggregateOutputType | null;
    _min: McqSubmissionMinAggregateOutputType | null;
    _max: McqSubmissionMaxAggregateOutputType | null;
};
type GetMcqSubmissionGroupByPayload<T extends McqSubmissionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<McqSubmissionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof McqSubmissionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], McqSubmissionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], McqSubmissionGroupByOutputType[P]>;
}>>;
export type McqSubmissionWhereInput = {
    AND?: Prisma.McqSubmissionWhereInput | Prisma.McqSubmissionWhereInput[];
    OR?: Prisma.McqSubmissionWhereInput[];
    NOT?: Prisma.McqSubmissionWhereInput | Prisma.McqSubmissionWhereInput[];
    id?: Prisma.StringFilter<"McqSubmission"> | string;
    userId?: Prisma.StringFilter<"McqSubmission"> | string;
    questionId?: Prisma.StringFilter<"McqSubmission"> | string;
    selectedOptionIndex?: Prisma.IntFilter<"McqSubmission"> | number;
    isCorrect?: Prisma.BoolFilter<"McqSubmission"> | boolean;
    pointsEarned?: Prisma.IntFilter<"McqSubmission"> | number;
    submittedAt?: Prisma.DateTimeFilter<"McqSubmission"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    mcqQuestion?: Prisma.XOR<Prisma.McqQuestionScalarRelationFilter, Prisma.McqQuestionWhereInput>;
};
export type McqSubmissionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    questionId?: Prisma.SortOrder;
    selectedOptionIndex?: Prisma.SortOrder;
    isCorrect?: Prisma.SortOrder;
    pointsEarned?: Prisma.SortOrder;
    submittedAt?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    mcqQuestion?: Prisma.McqQuestionOrderByWithRelationInput;
};
export type McqSubmissionWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    userId_questionId?: Prisma.McqSubmissionUserIdQuestionIdCompoundUniqueInput;
    AND?: Prisma.McqSubmissionWhereInput | Prisma.McqSubmissionWhereInput[];
    OR?: Prisma.McqSubmissionWhereInput[];
    NOT?: Prisma.McqSubmissionWhereInput | Prisma.McqSubmissionWhereInput[];
    userId?: Prisma.StringFilter<"McqSubmission"> | string;
    questionId?: Prisma.StringFilter<"McqSubmission"> | string;
    selectedOptionIndex?: Prisma.IntFilter<"McqSubmission"> | number;
    isCorrect?: Prisma.BoolFilter<"McqSubmission"> | boolean;
    pointsEarned?: Prisma.IntFilter<"McqSubmission"> | number;
    submittedAt?: Prisma.DateTimeFilter<"McqSubmission"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    mcqQuestion?: Prisma.XOR<Prisma.McqQuestionScalarRelationFilter, Prisma.McqQuestionWhereInput>;
}, "id" | "userId_questionId">;
export type McqSubmissionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    questionId?: Prisma.SortOrder;
    selectedOptionIndex?: Prisma.SortOrder;
    isCorrect?: Prisma.SortOrder;
    pointsEarned?: Prisma.SortOrder;
    submittedAt?: Prisma.SortOrder;
    _count?: Prisma.McqSubmissionCountOrderByAggregateInput;
    _avg?: Prisma.McqSubmissionAvgOrderByAggregateInput;
    _max?: Prisma.McqSubmissionMaxOrderByAggregateInput;
    _min?: Prisma.McqSubmissionMinOrderByAggregateInput;
    _sum?: Prisma.McqSubmissionSumOrderByAggregateInput;
};
export type McqSubmissionScalarWhereWithAggregatesInput = {
    AND?: Prisma.McqSubmissionScalarWhereWithAggregatesInput | Prisma.McqSubmissionScalarWhereWithAggregatesInput[];
    OR?: Prisma.McqSubmissionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.McqSubmissionScalarWhereWithAggregatesInput | Prisma.McqSubmissionScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"McqSubmission"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"McqSubmission"> | string;
    questionId?: Prisma.StringWithAggregatesFilter<"McqSubmission"> | string;
    selectedOptionIndex?: Prisma.IntWithAggregatesFilter<"McqSubmission"> | number;
    isCorrect?: Prisma.BoolWithAggregatesFilter<"McqSubmission"> | boolean;
    pointsEarned?: Prisma.IntWithAggregatesFilter<"McqSubmission"> | number;
    submittedAt?: Prisma.DateTimeWithAggregatesFilter<"McqSubmission"> | Date | string;
};
export type McqSubmissionCreateInput = {
    id?: string;
    selectedOptionIndex: number;
    isCorrect: boolean;
    pointsEarned?: number;
    submittedAt: Date | string;
    user: Prisma.UserCreateNestedOneWithoutMcqSubmissionsInput;
    mcqQuestion: Prisma.McqQuestionCreateNestedOneWithoutMcqSubmissionsInput;
};
export type McqSubmissionUncheckedCreateInput = {
    id?: string;
    userId: string;
    questionId: string;
    selectedOptionIndex: number;
    isCorrect: boolean;
    pointsEarned?: number;
    submittedAt: Date | string;
};
export type McqSubmissionUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    selectedOptionIndex?: Prisma.IntFieldUpdateOperationsInput | number;
    isCorrect?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    pointsEarned?: Prisma.IntFieldUpdateOperationsInput | number;
    submittedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutMcqSubmissionsNestedInput;
    mcqQuestion?: Prisma.McqQuestionUpdateOneRequiredWithoutMcqSubmissionsNestedInput;
};
export type McqSubmissionUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    questionId?: Prisma.StringFieldUpdateOperationsInput | string;
    selectedOptionIndex?: Prisma.IntFieldUpdateOperationsInput | number;
    isCorrect?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    pointsEarned?: Prisma.IntFieldUpdateOperationsInput | number;
    submittedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type McqSubmissionCreateManyInput = {
    id?: string;
    userId: string;
    questionId: string;
    selectedOptionIndex: number;
    isCorrect: boolean;
    pointsEarned?: number;
    submittedAt: Date | string;
};
export type McqSubmissionUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    selectedOptionIndex?: Prisma.IntFieldUpdateOperationsInput | number;
    isCorrect?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    pointsEarned?: Prisma.IntFieldUpdateOperationsInput | number;
    submittedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type McqSubmissionUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    questionId?: Prisma.StringFieldUpdateOperationsInput | string;
    selectedOptionIndex?: Prisma.IntFieldUpdateOperationsInput | number;
    isCorrect?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    pointsEarned?: Prisma.IntFieldUpdateOperationsInput | number;
    submittedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type McqSubmissionListRelationFilter = {
    every?: Prisma.McqSubmissionWhereInput;
    some?: Prisma.McqSubmissionWhereInput;
    none?: Prisma.McqSubmissionWhereInput;
};
export type McqSubmissionOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type McqSubmissionUserIdQuestionIdCompoundUniqueInput = {
    userId: string;
    questionId: string;
};
export type McqSubmissionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    questionId?: Prisma.SortOrder;
    selectedOptionIndex?: Prisma.SortOrder;
    isCorrect?: Prisma.SortOrder;
    pointsEarned?: Prisma.SortOrder;
    submittedAt?: Prisma.SortOrder;
};
export type McqSubmissionAvgOrderByAggregateInput = {
    selectedOptionIndex?: Prisma.SortOrder;
    pointsEarned?: Prisma.SortOrder;
};
export type McqSubmissionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    questionId?: Prisma.SortOrder;
    selectedOptionIndex?: Prisma.SortOrder;
    isCorrect?: Prisma.SortOrder;
    pointsEarned?: Prisma.SortOrder;
    submittedAt?: Prisma.SortOrder;
};
export type McqSubmissionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    questionId?: Prisma.SortOrder;
    selectedOptionIndex?: Prisma.SortOrder;
    isCorrect?: Prisma.SortOrder;
    pointsEarned?: Prisma.SortOrder;
    submittedAt?: Prisma.SortOrder;
};
export type McqSubmissionSumOrderByAggregateInput = {
    selectedOptionIndex?: Prisma.SortOrder;
    pointsEarned?: Prisma.SortOrder;
};
export type McqSubmissionCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.McqSubmissionCreateWithoutUserInput, Prisma.McqSubmissionUncheckedCreateWithoutUserInput> | Prisma.McqSubmissionCreateWithoutUserInput[] | Prisma.McqSubmissionUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.McqSubmissionCreateOrConnectWithoutUserInput | Prisma.McqSubmissionCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.McqSubmissionCreateManyUserInputEnvelope;
    connect?: Prisma.McqSubmissionWhereUniqueInput | Prisma.McqSubmissionWhereUniqueInput[];
};
export type McqSubmissionUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.McqSubmissionCreateWithoutUserInput, Prisma.McqSubmissionUncheckedCreateWithoutUserInput> | Prisma.McqSubmissionCreateWithoutUserInput[] | Prisma.McqSubmissionUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.McqSubmissionCreateOrConnectWithoutUserInput | Prisma.McqSubmissionCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.McqSubmissionCreateManyUserInputEnvelope;
    connect?: Prisma.McqSubmissionWhereUniqueInput | Prisma.McqSubmissionWhereUniqueInput[];
};
export type McqSubmissionUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.McqSubmissionCreateWithoutUserInput, Prisma.McqSubmissionUncheckedCreateWithoutUserInput> | Prisma.McqSubmissionCreateWithoutUserInput[] | Prisma.McqSubmissionUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.McqSubmissionCreateOrConnectWithoutUserInput | Prisma.McqSubmissionCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.McqSubmissionUpsertWithWhereUniqueWithoutUserInput | Prisma.McqSubmissionUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.McqSubmissionCreateManyUserInputEnvelope;
    set?: Prisma.McqSubmissionWhereUniqueInput | Prisma.McqSubmissionWhereUniqueInput[];
    disconnect?: Prisma.McqSubmissionWhereUniqueInput | Prisma.McqSubmissionWhereUniqueInput[];
    delete?: Prisma.McqSubmissionWhereUniqueInput | Prisma.McqSubmissionWhereUniqueInput[];
    connect?: Prisma.McqSubmissionWhereUniqueInput | Prisma.McqSubmissionWhereUniqueInput[];
    update?: Prisma.McqSubmissionUpdateWithWhereUniqueWithoutUserInput | Prisma.McqSubmissionUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.McqSubmissionUpdateManyWithWhereWithoutUserInput | Prisma.McqSubmissionUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.McqSubmissionScalarWhereInput | Prisma.McqSubmissionScalarWhereInput[];
};
export type McqSubmissionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.McqSubmissionCreateWithoutUserInput, Prisma.McqSubmissionUncheckedCreateWithoutUserInput> | Prisma.McqSubmissionCreateWithoutUserInput[] | Prisma.McqSubmissionUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.McqSubmissionCreateOrConnectWithoutUserInput | Prisma.McqSubmissionCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.McqSubmissionUpsertWithWhereUniqueWithoutUserInput | Prisma.McqSubmissionUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.McqSubmissionCreateManyUserInputEnvelope;
    set?: Prisma.McqSubmissionWhereUniqueInput | Prisma.McqSubmissionWhereUniqueInput[];
    disconnect?: Prisma.McqSubmissionWhereUniqueInput | Prisma.McqSubmissionWhereUniqueInput[];
    delete?: Prisma.McqSubmissionWhereUniqueInput | Prisma.McqSubmissionWhereUniqueInput[];
    connect?: Prisma.McqSubmissionWhereUniqueInput | Prisma.McqSubmissionWhereUniqueInput[];
    update?: Prisma.McqSubmissionUpdateWithWhereUniqueWithoutUserInput | Prisma.McqSubmissionUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.McqSubmissionUpdateManyWithWhereWithoutUserInput | Prisma.McqSubmissionUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.McqSubmissionScalarWhereInput | Prisma.McqSubmissionScalarWhereInput[];
};
export type McqSubmissionCreateNestedManyWithoutMcqQuestionInput = {
    create?: Prisma.XOR<Prisma.McqSubmissionCreateWithoutMcqQuestionInput, Prisma.McqSubmissionUncheckedCreateWithoutMcqQuestionInput> | Prisma.McqSubmissionCreateWithoutMcqQuestionInput[] | Prisma.McqSubmissionUncheckedCreateWithoutMcqQuestionInput[];
    connectOrCreate?: Prisma.McqSubmissionCreateOrConnectWithoutMcqQuestionInput | Prisma.McqSubmissionCreateOrConnectWithoutMcqQuestionInput[];
    createMany?: Prisma.McqSubmissionCreateManyMcqQuestionInputEnvelope;
    connect?: Prisma.McqSubmissionWhereUniqueInput | Prisma.McqSubmissionWhereUniqueInput[];
};
export type McqSubmissionUncheckedCreateNestedManyWithoutMcqQuestionInput = {
    create?: Prisma.XOR<Prisma.McqSubmissionCreateWithoutMcqQuestionInput, Prisma.McqSubmissionUncheckedCreateWithoutMcqQuestionInput> | Prisma.McqSubmissionCreateWithoutMcqQuestionInput[] | Prisma.McqSubmissionUncheckedCreateWithoutMcqQuestionInput[];
    connectOrCreate?: Prisma.McqSubmissionCreateOrConnectWithoutMcqQuestionInput | Prisma.McqSubmissionCreateOrConnectWithoutMcqQuestionInput[];
    createMany?: Prisma.McqSubmissionCreateManyMcqQuestionInputEnvelope;
    connect?: Prisma.McqSubmissionWhereUniqueInput | Prisma.McqSubmissionWhereUniqueInput[];
};
export type McqSubmissionUpdateManyWithoutMcqQuestionNestedInput = {
    create?: Prisma.XOR<Prisma.McqSubmissionCreateWithoutMcqQuestionInput, Prisma.McqSubmissionUncheckedCreateWithoutMcqQuestionInput> | Prisma.McqSubmissionCreateWithoutMcqQuestionInput[] | Prisma.McqSubmissionUncheckedCreateWithoutMcqQuestionInput[];
    connectOrCreate?: Prisma.McqSubmissionCreateOrConnectWithoutMcqQuestionInput | Prisma.McqSubmissionCreateOrConnectWithoutMcqQuestionInput[];
    upsert?: Prisma.McqSubmissionUpsertWithWhereUniqueWithoutMcqQuestionInput | Prisma.McqSubmissionUpsertWithWhereUniqueWithoutMcqQuestionInput[];
    createMany?: Prisma.McqSubmissionCreateManyMcqQuestionInputEnvelope;
    set?: Prisma.McqSubmissionWhereUniqueInput | Prisma.McqSubmissionWhereUniqueInput[];
    disconnect?: Prisma.McqSubmissionWhereUniqueInput | Prisma.McqSubmissionWhereUniqueInput[];
    delete?: Prisma.McqSubmissionWhereUniqueInput | Prisma.McqSubmissionWhereUniqueInput[];
    connect?: Prisma.McqSubmissionWhereUniqueInput | Prisma.McqSubmissionWhereUniqueInput[];
    update?: Prisma.McqSubmissionUpdateWithWhereUniqueWithoutMcqQuestionInput | Prisma.McqSubmissionUpdateWithWhereUniqueWithoutMcqQuestionInput[];
    updateMany?: Prisma.McqSubmissionUpdateManyWithWhereWithoutMcqQuestionInput | Prisma.McqSubmissionUpdateManyWithWhereWithoutMcqQuestionInput[];
    deleteMany?: Prisma.McqSubmissionScalarWhereInput | Prisma.McqSubmissionScalarWhereInput[];
};
export type McqSubmissionUncheckedUpdateManyWithoutMcqQuestionNestedInput = {
    create?: Prisma.XOR<Prisma.McqSubmissionCreateWithoutMcqQuestionInput, Prisma.McqSubmissionUncheckedCreateWithoutMcqQuestionInput> | Prisma.McqSubmissionCreateWithoutMcqQuestionInput[] | Prisma.McqSubmissionUncheckedCreateWithoutMcqQuestionInput[];
    connectOrCreate?: Prisma.McqSubmissionCreateOrConnectWithoutMcqQuestionInput | Prisma.McqSubmissionCreateOrConnectWithoutMcqQuestionInput[];
    upsert?: Prisma.McqSubmissionUpsertWithWhereUniqueWithoutMcqQuestionInput | Prisma.McqSubmissionUpsertWithWhereUniqueWithoutMcqQuestionInput[];
    createMany?: Prisma.McqSubmissionCreateManyMcqQuestionInputEnvelope;
    set?: Prisma.McqSubmissionWhereUniqueInput | Prisma.McqSubmissionWhereUniqueInput[];
    disconnect?: Prisma.McqSubmissionWhereUniqueInput | Prisma.McqSubmissionWhereUniqueInput[];
    delete?: Prisma.McqSubmissionWhereUniqueInput | Prisma.McqSubmissionWhereUniqueInput[];
    connect?: Prisma.McqSubmissionWhereUniqueInput | Prisma.McqSubmissionWhereUniqueInput[];
    update?: Prisma.McqSubmissionUpdateWithWhereUniqueWithoutMcqQuestionInput | Prisma.McqSubmissionUpdateWithWhereUniqueWithoutMcqQuestionInput[];
    updateMany?: Prisma.McqSubmissionUpdateManyWithWhereWithoutMcqQuestionInput | Prisma.McqSubmissionUpdateManyWithWhereWithoutMcqQuestionInput[];
    deleteMany?: Prisma.McqSubmissionScalarWhereInput | Prisma.McqSubmissionScalarWhereInput[];
};
export type McqSubmissionCreateWithoutUserInput = {
    id?: string;
    selectedOptionIndex: number;
    isCorrect: boolean;
    pointsEarned?: number;
    submittedAt: Date | string;
    mcqQuestion: Prisma.McqQuestionCreateNestedOneWithoutMcqSubmissionsInput;
};
export type McqSubmissionUncheckedCreateWithoutUserInput = {
    id?: string;
    questionId: string;
    selectedOptionIndex: number;
    isCorrect: boolean;
    pointsEarned?: number;
    submittedAt: Date | string;
};
export type McqSubmissionCreateOrConnectWithoutUserInput = {
    where: Prisma.McqSubmissionWhereUniqueInput;
    create: Prisma.XOR<Prisma.McqSubmissionCreateWithoutUserInput, Prisma.McqSubmissionUncheckedCreateWithoutUserInput>;
};
export type McqSubmissionCreateManyUserInputEnvelope = {
    data: Prisma.McqSubmissionCreateManyUserInput | Prisma.McqSubmissionCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type McqSubmissionUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.McqSubmissionWhereUniqueInput;
    update: Prisma.XOR<Prisma.McqSubmissionUpdateWithoutUserInput, Prisma.McqSubmissionUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.McqSubmissionCreateWithoutUserInput, Prisma.McqSubmissionUncheckedCreateWithoutUserInput>;
};
export type McqSubmissionUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.McqSubmissionWhereUniqueInput;
    data: Prisma.XOR<Prisma.McqSubmissionUpdateWithoutUserInput, Prisma.McqSubmissionUncheckedUpdateWithoutUserInput>;
};
export type McqSubmissionUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.McqSubmissionScalarWhereInput;
    data: Prisma.XOR<Prisma.McqSubmissionUpdateManyMutationInput, Prisma.McqSubmissionUncheckedUpdateManyWithoutUserInput>;
};
export type McqSubmissionScalarWhereInput = {
    AND?: Prisma.McqSubmissionScalarWhereInput | Prisma.McqSubmissionScalarWhereInput[];
    OR?: Prisma.McqSubmissionScalarWhereInput[];
    NOT?: Prisma.McqSubmissionScalarWhereInput | Prisma.McqSubmissionScalarWhereInput[];
    id?: Prisma.StringFilter<"McqSubmission"> | string;
    userId?: Prisma.StringFilter<"McqSubmission"> | string;
    questionId?: Prisma.StringFilter<"McqSubmission"> | string;
    selectedOptionIndex?: Prisma.IntFilter<"McqSubmission"> | number;
    isCorrect?: Prisma.BoolFilter<"McqSubmission"> | boolean;
    pointsEarned?: Prisma.IntFilter<"McqSubmission"> | number;
    submittedAt?: Prisma.DateTimeFilter<"McqSubmission"> | Date | string;
};
export type McqSubmissionCreateWithoutMcqQuestionInput = {
    id?: string;
    selectedOptionIndex: number;
    isCorrect: boolean;
    pointsEarned?: number;
    submittedAt: Date | string;
    user: Prisma.UserCreateNestedOneWithoutMcqSubmissionsInput;
};
export type McqSubmissionUncheckedCreateWithoutMcqQuestionInput = {
    id?: string;
    userId: string;
    selectedOptionIndex: number;
    isCorrect: boolean;
    pointsEarned?: number;
    submittedAt: Date | string;
};
export type McqSubmissionCreateOrConnectWithoutMcqQuestionInput = {
    where: Prisma.McqSubmissionWhereUniqueInput;
    create: Prisma.XOR<Prisma.McqSubmissionCreateWithoutMcqQuestionInput, Prisma.McqSubmissionUncheckedCreateWithoutMcqQuestionInput>;
};
export type McqSubmissionCreateManyMcqQuestionInputEnvelope = {
    data: Prisma.McqSubmissionCreateManyMcqQuestionInput | Prisma.McqSubmissionCreateManyMcqQuestionInput[];
    skipDuplicates?: boolean;
};
export type McqSubmissionUpsertWithWhereUniqueWithoutMcqQuestionInput = {
    where: Prisma.McqSubmissionWhereUniqueInput;
    update: Prisma.XOR<Prisma.McqSubmissionUpdateWithoutMcqQuestionInput, Prisma.McqSubmissionUncheckedUpdateWithoutMcqQuestionInput>;
    create: Prisma.XOR<Prisma.McqSubmissionCreateWithoutMcqQuestionInput, Prisma.McqSubmissionUncheckedCreateWithoutMcqQuestionInput>;
};
export type McqSubmissionUpdateWithWhereUniqueWithoutMcqQuestionInput = {
    where: Prisma.McqSubmissionWhereUniqueInput;
    data: Prisma.XOR<Prisma.McqSubmissionUpdateWithoutMcqQuestionInput, Prisma.McqSubmissionUncheckedUpdateWithoutMcqQuestionInput>;
};
export type McqSubmissionUpdateManyWithWhereWithoutMcqQuestionInput = {
    where: Prisma.McqSubmissionScalarWhereInput;
    data: Prisma.XOR<Prisma.McqSubmissionUpdateManyMutationInput, Prisma.McqSubmissionUncheckedUpdateManyWithoutMcqQuestionInput>;
};
export type McqSubmissionCreateManyUserInput = {
    id?: string;
    questionId: string;
    selectedOptionIndex: number;
    isCorrect: boolean;
    pointsEarned?: number;
    submittedAt: Date | string;
};
export type McqSubmissionUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    selectedOptionIndex?: Prisma.IntFieldUpdateOperationsInput | number;
    isCorrect?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    pointsEarned?: Prisma.IntFieldUpdateOperationsInput | number;
    submittedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    mcqQuestion?: Prisma.McqQuestionUpdateOneRequiredWithoutMcqSubmissionsNestedInput;
};
export type McqSubmissionUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    questionId?: Prisma.StringFieldUpdateOperationsInput | string;
    selectedOptionIndex?: Prisma.IntFieldUpdateOperationsInput | number;
    isCorrect?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    pointsEarned?: Prisma.IntFieldUpdateOperationsInput | number;
    submittedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type McqSubmissionUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    questionId?: Prisma.StringFieldUpdateOperationsInput | string;
    selectedOptionIndex?: Prisma.IntFieldUpdateOperationsInput | number;
    isCorrect?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    pointsEarned?: Prisma.IntFieldUpdateOperationsInput | number;
    submittedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type McqSubmissionCreateManyMcqQuestionInput = {
    id?: string;
    userId: string;
    selectedOptionIndex: number;
    isCorrect: boolean;
    pointsEarned?: number;
    submittedAt: Date | string;
};
export type McqSubmissionUpdateWithoutMcqQuestionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    selectedOptionIndex?: Prisma.IntFieldUpdateOperationsInput | number;
    isCorrect?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    pointsEarned?: Prisma.IntFieldUpdateOperationsInput | number;
    submittedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutMcqSubmissionsNestedInput;
};
export type McqSubmissionUncheckedUpdateWithoutMcqQuestionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    selectedOptionIndex?: Prisma.IntFieldUpdateOperationsInput | number;
    isCorrect?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    pointsEarned?: Prisma.IntFieldUpdateOperationsInput | number;
    submittedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type McqSubmissionUncheckedUpdateManyWithoutMcqQuestionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    selectedOptionIndex?: Prisma.IntFieldUpdateOperationsInput | number;
    isCorrect?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    pointsEarned?: Prisma.IntFieldUpdateOperationsInput | number;
    submittedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type McqSubmissionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    questionId?: boolean;
    selectedOptionIndex?: boolean;
    isCorrect?: boolean;
    pointsEarned?: boolean;
    submittedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    mcqQuestion?: boolean | Prisma.McqQuestionDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["mcqSubmission"]>;
export type McqSubmissionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    questionId?: boolean;
    selectedOptionIndex?: boolean;
    isCorrect?: boolean;
    pointsEarned?: boolean;
    submittedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    mcqQuestion?: boolean | Prisma.McqQuestionDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["mcqSubmission"]>;
export type McqSubmissionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    questionId?: boolean;
    selectedOptionIndex?: boolean;
    isCorrect?: boolean;
    pointsEarned?: boolean;
    submittedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    mcqQuestion?: boolean | Prisma.McqQuestionDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["mcqSubmission"]>;
export type McqSubmissionSelectScalar = {
    id?: boolean;
    userId?: boolean;
    questionId?: boolean;
    selectedOptionIndex?: boolean;
    isCorrect?: boolean;
    pointsEarned?: boolean;
    submittedAt?: boolean;
};
export type McqSubmissionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "questionId" | "selectedOptionIndex" | "isCorrect" | "pointsEarned" | "submittedAt", ExtArgs["result"]["mcqSubmission"]>;
export type McqSubmissionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    mcqQuestion?: boolean | Prisma.McqQuestionDefaultArgs<ExtArgs>;
};
export type McqSubmissionIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    mcqQuestion?: boolean | Prisma.McqQuestionDefaultArgs<ExtArgs>;
};
export type McqSubmissionIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    mcqQuestion?: boolean | Prisma.McqQuestionDefaultArgs<ExtArgs>;
};
export type $McqSubmissionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "McqSubmission";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        mcqQuestion: Prisma.$McqQuestionPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string;
        questionId: string;
        selectedOptionIndex: number;
        isCorrect: boolean;
        pointsEarned: number;
        submittedAt: Date;
    }, ExtArgs["result"]["mcqSubmission"]>;
    composites: {};
};
export type McqSubmissionGetPayload<S extends boolean | null | undefined | McqSubmissionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$McqSubmissionPayload, S>;
export type McqSubmissionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<McqSubmissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: McqSubmissionCountAggregateInputType | true;
};
export interface McqSubmissionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['McqSubmission'];
        meta: {
            name: 'McqSubmission';
        };
    };
    /**
     * Find zero or one McqSubmission that matches the filter.
     * @param {McqSubmissionFindUniqueArgs} args - Arguments to find a McqSubmission
     * @example
     * // Get one McqSubmission
     * const mcqSubmission = await prisma.mcqSubmission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends McqSubmissionFindUniqueArgs>(args: Prisma.SelectSubset<T, McqSubmissionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__McqSubmissionClient<runtime.Types.Result.GetResult<Prisma.$McqSubmissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one McqSubmission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {McqSubmissionFindUniqueOrThrowArgs} args - Arguments to find a McqSubmission
     * @example
     * // Get one McqSubmission
     * const mcqSubmission = await prisma.mcqSubmission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends McqSubmissionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, McqSubmissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__McqSubmissionClient<runtime.Types.Result.GetResult<Prisma.$McqSubmissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first McqSubmission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {McqSubmissionFindFirstArgs} args - Arguments to find a McqSubmission
     * @example
     * // Get one McqSubmission
     * const mcqSubmission = await prisma.mcqSubmission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends McqSubmissionFindFirstArgs>(args?: Prisma.SelectSubset<T, McqSubmissionFindFirstArgs<ExtArgs>>): Prisma.Prisma__McqSubmissionClient<runtime.Types.Result.GetResult<Prisma.$McqSubmissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first McqSubmission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {McqSubmissionFindFirstOrThrowArgs} args - Arguments to find a McqSubmission
     * @example
     * // Get one McqSubmission
     * const mcqSubmission = await prisma.mcqSubmission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends McqSubmissionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, McqSubmissionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__McqSubmissionClient<runtime.Types.Result.GetResult<Prisma.$McqSubmissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more McqSubmissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {McqSubmissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all McqSubmissions
     * const mcqSubmissions = await prisma.mcqSubmission.findMany()
     *
     * // Get first 10 McqSubmissions
     * const mcqSubmissions = await prisma.mcqSubmission.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const mcqSubmissionWithIdOnly = await prisma.mcqSubmission.findMany({ select: { id: true } })
     *
     */
    findMany<T extends McqSubmissionFindManyArgs>(args?: Prisma.SelectSubset<T, McqSubmissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$McqSubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a McqSubmission.
     * @param {McqSubmissionCreateArgs} args - Arguments to create a McqSubmission.
     * @example
     * // Create one McqSubmission
     * const McqSubmission = await prisma.mcqSubmission.create({
     *   data: {
     *     // ... data to create a McqSubmission
     *   }
     * })
     *
     */
    create<T extends McqSubmissionCreateArgs>(args: Prisma.SelectSubset<T, McqSubmissionCreateArgs<ExtArgs>>): Prisma.Prisma__McqSubmissionClient<runtime.Types.Result.GetResult<Prisma.$McqSubmissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many McqSubmissions.
     * @param {McqSubmissionCreateManyArgs} args - Arguments to create many McqSubmissions.
     * @example
     * // Create many McqSubmissions
     * const mcqSubmission = await prisma.mcqSubmission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends McqSubmissionCreateManyArgs>(args?: Prisma.SelectSubset<T, McqSubmissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many McqSubmissions and returns the data saved in the database.
     * @param {McqSubmissionCreateManyAndReturnArgs} args - Arguments to create many McqSubmissions.
     * @example
     * // Create many McqSubmissions
     * const mcqSubmission = await prisma.mcqSubmission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many McqSubmissions and only return the `id`
     * const mcqSubmissionWithIdOnly = await prisma.mcqSubmission.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends McqSubmissionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, McqSubmissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$McqSubmissionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a McqSubmission.
     * @param {McqSubmissionDeleteArgs} args - Arguments to delete one McqSubmission.
     * @example
     * // Delete one McqSubmission
     * const McqSubmission = await prisma.mcqSubmission.delete({
     *   where: {
     *     // ... filter to delete one McqSubmission
     *   }
     * })
     *
     */
    delete<T extends McqSubmissionDeleteArgs>(args: Prisma.SelectSubset<T, McqSubmissionDeleteArgs<ExtArgs>>): Prisma.Prisma__McqSubmissionClient<runtime.Types.Result.GetResult<Prisma.$McqSubmissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one McqSubmission.
     * @param {McqSubmissionUpdateArgs} args - Arguments to update one McqSubmission.
     * @example
     * // Update one McqSubmission
     * const mcqSubmission = await prisma.mcqSubmission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends McqSubmissionUpdateArgs>(args: Prisma.SelectSubset<T, McqSubmissionUpdateArgs<ExtArgs>>): Prisma.Prisma__McqSubmissionClient<runtime.Types.Result.GetResult<Prisma.$McqSubmissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more McqSubmissions.
     * @param {McqSubmissionDeleteManyArgs} args - Arguments to filter McqSubmissions to delete.
     * @example
     * // Delete a few McqSubmissions
     * const { count } = await prisma.mcqSubmission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends McqSubmissionDeleteManyArgs>(args?: Prisma.SelectSubset<T, McqSubmissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more McqSubmissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {McqSubmissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many McqSubmissions
     * const mcqSubmission = await prisma.mcqSubmission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends McqSubmissionUpdateManyArgs>(args: Prisma.SelectSubset<T, McqSubmissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more McqSubmissions and returns the data updated in the database.
     * @param {McqSubmissionUpdateManyAndReturnArgs} args - Arguments to update many McqSubmissions.
     * @example
     * // Update many McqSubmissions
     * const mcqSubmission = await prisma.mcqSubmission.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more McqSubmissions and only return the `id`
     * const mcqSubmissionWithIdOnly = await prisma.mcqSubmission.updateManyAndReturn({
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
    updateManyAndReturn<T extends McqSubmissionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, McqSubmissionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$McqSubmissionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one McqSubmission.
     * @param {McqSubmissionUpsertArgs} args - Arguments to update or create a McqSubmission.
     * @example
     * // Update or create a McqSubmission
     * const mcqSubmission = await prisma.mcqSubmission.upsert({
     *   create: {
     *     // ... data to create a McqSubmission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the McqSubmission we want to update
     *   }
     * })
     */
    upsert<T extends McqSubmissionUpsertArgs>(args: Prisma.SelectSubset<T, McqSubmissionUpsertArgs<ExtArgs>>): Prisma.Prisma__McqSubmissionClient<runtime.Types.Result.GetResult<Prisma.$McqSubmissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of McqSubmissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {McqSubmissionCountArgs} args - Arguments to filter McqSubmissions to count.
     * @example
     * // Count the number of McqSubmissions
     * const count = await prisma.mcqSubmission.count({
     *   where: {
     *     // ... the filter for the McqSubmissions we want to count
     *   }
     * })
    **/
    count<T extends McqSubmissionCountArgs>(args?: Prisma.Subset<T, McqSubmissionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], McqSubmissionCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a McqSubmission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {McqSubmissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends McqSubmissionAggregateArgs>(args: Prisma.Subset<T, McqSubmissionAggregateArgs>): Prisma.PrismaPromise<GetMcqSubmissionAggregateType<T>>;
    /**
     * Group by McqSubmission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {McqSubmissionGroupByArgs} args - Group by arguments.
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
    groupBy<T extends McqSubmissionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: McqSubmissionGroupByArgs['orderBy'];
    } : {
        orderBy?: McqSubmissionGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, McqSubmissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMcqSubmissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the McqSubmission model
     */
    readonly fields: McqSubmissionFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for McqSubmission.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__McqSubmissionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    mcqQuestion<T extends Prisma.McqQuestionDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.McqQuestionDefaultArgs<ExtArgs>>): Prisma.Prisma__McqQuestionClient<runtime.Types.Result.GetResult<Prisma.$McqQuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the McqSubmission model
 */
export interface McqSubmissionFieldRefs {
    readonly id: Prisma.FieldRef<"McqSubmission", 'String'>;
    readonly userId: Prisma.FieldRef<"McqSubmission", 'String'>;
    readonly questionId: Prisma.FieldRef<"McqSubmission", 'String'>;
    readonly selectedOptionIndex: Prisma.FieldRef<"McqSubmission", 'Int'>;
    readonly isCorrect: Prisma.FieldRef<"McqSubmission", 'Boolean'>;
    readonly pointsEarned: Prisma.FieldRef<"McqSubmission", 'Int'>;
    readonly submittedAt: Prisma.FieldRef<"McqSubmission", 'DateTime'>;
}
/**
 * McqSubmission findUnique
 */
export type McqSubmissionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the McqSubmission
     */
    select?: Prisma.McqSubmissionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the McqSubmission
     */
    omit?: Prisma.McqSubmissionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.McqSubmissionInclude<ExtArgs> | null;
    /**
     * Filter, which McqSubmission to fetch.
     */
    where: Prisma.McqSubmissionWhereUniqueInput;
};
/**
 * McqSubmission findUniqueOrThrow
 */
export type McqSubmissionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the McqSubmission
     */
    select?: Prisma.McqSubmissionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the McqSubmission
     */
    omit?: Prisma.McqSubmissionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.McqSubmissionInclude<ExtArgs> | null;
    /**
     * Filter, which McqSubmission to fetch.
     */
    where: Prisma.McqSubmissionWhereUniqueInput;
};
/**
 * McqSubmission findFirst
 */
export type McqSubmissionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the McqSubmission
     */
    select?: Prisma.McqSubmissionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the McqSubmission
     */
    omit?: Prisma.McqSubmissionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.McqSubmissionInclude<ExtArgs> | null;
    /**
     * Filter, which McqSubmission to fetch.
     */
    where?: Prisma.McqSubmissionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of McqSubmissions to fetch.
     */
    orderBy?: Prisma.McqSubmissionOrderByWithRelationInput | Prisma.McqSubmissionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for McqSubmissions.
     */
    cursor?: Prisma.McqSubmissionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` McqSubmissions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` McqSubmissions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of McqSubmissions.
     */
    distinct?: Prisma.McqSubmissionScalarFieldEnum | Prisma.McqSubmissionScalarFieldEnum[];
};
/**
 * McqSubmission findFirstOrThrow
 */
export type McqSubmissionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the McqSubmission
     */
    select?: Prisma.McqSubmissionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the McqSubmission
     */
    omit?: Prisma.McqSubmissionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.McqSubmissionInclude<ExtArgs> | null;
    /**
     * Filter, which McqSubmission to fetch.
     */
    where?: Prisma.McqSubmissionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of McqSubmissions to fetch.
     */
    orderBy?: Prisma.McqSubmissionOrderByWithRelationInput | Prisma.McqSubmissionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for McqSubmissions.
     */
    cursor?: Prisma.McqSubmissionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` McqSubmissions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` McqSubmissions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of McqSubmissions.
     */
    distinct?: Prisma.McqSubmissionScalarFieldEnum | Prisma.McqSubmissionScalarFieldEnum[];
};
/**
 * McqSubmission findMany
 */
export type McqSubmissionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the McqSubmission
     */
    select?: Prisma.McqSubmissionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the McqSubmission
     */
    omit?: Prisma.McqSubmissionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.McqSubmissionInclude<ExtArgs> | null;
    /**
     * Filter, which McqSubmissions to fetch.
     */
    where?: Prisma.McqSubmissionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of McqSubmissions to fetch.
     */
    orderBy?: Prisma.McqSubmissionOrderByWithRelationInput | Prisma.McqSubmissionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing McqSubmissions.
     */
    cursor?: Prisma.McqSubmissionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` McqSubmissions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` McqSubmissions.
     */
    skip?: number;
    distinct?: Prisma.McqSubmissionScalarFieldEnum | Prisma.McqSubmissionScalarFieldEnum[];
};
/**
 * McqSubmission create
 */
export type McqSubmissionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the McqSubmission
     */
    select?: Prisma.McqSubmissionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the McqSubmission
     */
    omit?: Prisma.McqSubmissionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.McqSubmissionInclude<ExtArgs> | null;
    /**
     * The data needed to create a McqSubmission.
     */
    data: Prisma.XOR<Prisma.McqSubmissionCreateInput, Prisma.McqSubmissionUncheckedCreateInput>;
};
/**
 * McqSubmission createMany
 */
export type McqSubmissionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many McqSubmissions.
     */
    data: Prisma.McqSubmissionCreateManyInput | Prisma.McqSubmissionCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * McqSubmission createManyAndReturn
 */
export type McqSubmissionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the McqSubmission
     */
    select?: Prisma.McqSubmissionSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the McqSubmission
     */
    omit?: Prisma.McqSubmissionOmit<ExtArgs> | null;
    /**
     * The data used to create many McqSubmissions.
     */
    data: Prisma.McqSubmissionCreateManyInput | Prisma.McqSubmissionCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.McqSubmissionIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * McqSubmission update
 */
export type McqSubmissionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the McqSubmission
     */
    select?: Prisma.McqSubmissionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the McqSubmission
     */
    omit?: Prisma.McqSubmissionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.McqSubmissionInclude<ExtArgs> | null;
    /**
     * The data needed to update a McqSubmission.
     */
    data: Prisma.XOR<Prisma.McqSubmissionUpdateInput, Prisma.McqSubmissionUncheckedUpdateInput>;
    /**
     * Choose, which McqSubmission to update.
     */
    where: Prisma.McqSubmissionWhereUniqueInput;
};
/**
 * McqSubmission updateMany
 */
export type McqSubmissionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update McqSubmissions.
     */
    data: Prisma.XOR<Prisma.McqSubmissionUpdateManyMutationInput, Prisma.McqSubmissionUncheckedUpdateManyInput>;
    /**
     * Filter which McqSubmissions to update
     */
    where?: Prisma.McqSubmissionWhereInput;
    /**
     * Limit how many McqSubmissions to update.
     */
    limit?: number;
};
/**
 * McqSubmission updateManyAndReturn
 */
export type McqSubmissionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the McqSubmission
     */
    select?: Prisma.McqSubmissionSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the McqSubmission
     */
    omit?: Prisma.McqSubmissionOmit<ExtArgs> | null;
    /**
     * The data used to update McqSubmissions.
     */
    data: Prisma.XOR<Prisma.McqSubmissionUpdateManyMutationInput, Prisma.McqSubmissionUncheckedUpdateManyInput>;
    /**
     * Filter which McqSubmissions to update
     */
    where?: Prisma.McqSubmissionWhereInput;
    /**
     * Limit how many McqSubmissions to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.McqSubmissionIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * McqSubmission upsert
 */
export type McqSubmissionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the McqSubmission
     */
    select?: Prisma.McqSubmissionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the McqSubmission
     */
    omit?: Prisma.McqSubmissionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.McqSubmissionInclude<ExtArgs> | null;
    /**
     * The filter to search for the McqSubmission to update in case it exists.
     */
    where: Prisma.McqSubmissionWhereUniqueInput;
    /**
     * In case the McqSubmission found by the `where` argument doesn't exist, create a new McqSubmission with this data.
     */
    create: Prisma.XOR<Prisma.McqSubmissionCreateInput, Prisma.McqSubmissionUncheckedCreateInput>;
    /**
     * In case the McqSubmission was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.McqSubmissionUpdateInput, Prisma.McqSubmissionUncheckedUpdateInput>;
};
/**
 * McqSubmission delete
 */
export type McqSubmissionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the McqSubmission
     */
    select?: Prisma.McqSubmissionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the McqSubmission
     */
    omit?: Prisma.McqSubmissionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.McqSubmissionInclude<ExtArgs> | null;
    /**
     * Filter which McqSubmission to delete.
     */
    where: Prisma.McqSubmissionWhereUniqueInput;
};
/**
 * McqSubmission deleteMany
 */
export type McqSubmissionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which McqSubmissions to delete
     */
    where?: Prisma.McqSubmissionWhereInput;
    /**
     * Limit how many McqSubmissions to delete.
     */
    limit?: number;
};
/**
 * McqSubmission without action
 */
export type McqSubmissionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the McqSubmission
     */
    select?: Prisma.McqSubmissionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the McqSubmission
     */
    omit?: Prisma.McqSubmissionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.McqSubmissionInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=McqSubmission.d.ts.map