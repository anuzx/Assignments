import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model DsaProblem
 *
 */
export type DsaProblemModel = runtime.Types.Result.DefaultSelection<Prisma.$DsaProblemPayload>;
export type AggregateDsaProblem = {
    _count: DsaProblemCountAggregateOutputType | null;
    _avg: DsaProblemAvgAggregateOutputType | null;
    _sum: DsaProblemSumAggregateOutputType | null;
    _min: DsaProblemMinAggregateOutputType | null;
    _max: DsaProblemMaxAggregateOutputType | null;
};
export type DsaProblemAvgAggregateOutputType = {
    points: number | null;
    timeLimit: number | null;
    memoryLimit: number | null;
};
export type DsaProblemSumAggregateOutputType = {
    points: number | null;
    timeLimit: number | null;
    memoryLimit: number | null;
};
export type DsaProblemMinAggregateOutputType = {
    id: string | null;
    contestId: string | null;
    title: string | null;
    description: string | null;
    points: number | null;
    timeLimit: number | null;
    memoryLimit: number | null;
    createdAt: Date | null;
};
export type DsaProblemMaxAggregateOutputType = {
    id: string | null;
    contestId: string | null;
    title: string | null;
    description: string | null;
    points: number | null;
    timeLimit: number | null;
    memoryLimit: number | null;
    createdAt: Date | null;
};
export type DsaProblemCountAggregateOutputType = {
    id: number;
    contestId: number;
    title: number;
    description: number;
    tags: number;
    points: number;
    timeLimit: number;
    memoryLimit: number;
    createdAt: number;
    _all: number;
};
export type DsaProblemAvgAggregateInputType = {
    points?: true;
    timeLimit?: true;
    memoryLimit?: true;
};
export type DsaProblemSumAggregateInputType = {
    points?: true;
    timeLimit?: true;
    memoryLimit?: true;
};
export type DsaProblemMinAggregateInputType = {
    id?: true;
    contestId?: true;
    title?: true;
    description?: true;
    points?: true;
    timeLimit?: true;
    memoryLimit?: true;
    createdAt?: true;
};
export type DsaProblemMaxAggregateInputType = {
    id?: true;
    contestId?: true;
    title?: true;
    description?: true;
    points?: true;
    timeLimit?: true;
    memoryLimit?: true;
    createdAt?: true;
};
export type DsaProblemCountAggregateInputType = {
    id?: true;
    contestId?: true;
    title?: true;
    description?: true;
    tags?: true;
    points?: true;
    timeLimit?: true;
    memoryLimit?: true;
    createdAt?: true;
    _all?: true;
};
export type DsaProblemAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which DsaProblem to aggregate.
     */
    where?: Prisma.DsaProblemWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of DsaProblems to fetch.
     */
    orderBy?: Prisma.DsaProblemOrderByWithRelationInput | Prisma.DsaProblemOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.DsaProblemWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` DsaProblems from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` DsaProblems.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned DsaProblems
    **/
    _count?: true | DsaProblemCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: DsaProblemAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: DsaProblemSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: DsaProblemMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: DsaProblemMaxAggregateInputType;
};
export type GetDsaProblemAggregateType<T extends DsaProblemAggregateArgs> = {
    [P in keyof T & keyof AggregateDsaProblem]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateDsaProblem[P]> : Prisma.GetScalarType<T[P], AggregateDsaProblem[P]>;
};
export type DsaProblemGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DsaProblemWhereInput;
    orderBy?: Prisma.DsaProblemOrderByWithAggregationInput | Prisma.DsaProblemOrderByWithAggregationInput[];
    by: Prisma.DsaProblemScalarFieldEnum[] | Prisma.DsaProblemScalarFieldEnum;
    having?: Prisma.DsaProblemScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: DsaProblemCountAggregateInputType | true;
    _avg?: DsaProblemAvgAggregateInputType;
    _sum?: DsaProblemSumAggregateInputType;
    _min?: DsaProblemMinAggregateInputType;
    _max?: DsaProblemMaxAggregateInputType;
};
export type DsaProblemGroupByOutputType = {
    id: string;
    contestId: string;
    title: string;
    description: string;
    tags: runtime.JsonValue;
    points: number;
    timeLimit: number;
    memoryLimit: number;
    createdAt: Date;
    _count: DsaProblemCountAggregateOutputType | null;
    _avg: DsaProblemAvgAggregateOutputType | null;
    _sum: DsaProblemSumAggregateOutputType | null;
    _min: DsaProblemMinAggregateOutputType | null;
    _max: DsaProblemMaxAggregateOutputType | null;
};
type GetDsaProblemGroupByPayload<T extends DsaProblemGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<DsaProblemGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof DsaProblemGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], DsaProblemGroupByOutputType[P]> : Prisma.GetScalarType<T[P], DsaProblemGroupByOutputType[P]>;
}>>;
export type DsaProblemWhereInput = {
    AND?: Prisma.DsaProblemWhereInput | Prisma.DsaProblemWhereInput[];
    OR?: Prisma.DsaProblemWhereInput[];
    NOT?: Prisma.DsaProblemWhereInput | Prisma.DsaProblemWhereInput[];
    id?: Prisma.StringFilter<"DsaProblem"> | string;
    contestId?: Prisma.StringFilter<"DsaProblem"> | string;
    title?: Prisma.StringFilter<"DsaProblem"> | string;
    description?: Prisma.StringFilter<"DsaProblem"> | string;
    tags?: Prisma.JsonFilter<"DsaProblem">;
    points?: Prisma.IntFilter<"DsaProblem"> | number;
    timeLimit?: Prisma.IntFilter<"DsaProblem"> | number;
    memoryLimit?: Prisma.IntFilter<"DsaProblem"> | number;
    createdAt?: Prisma.DateTimeFilter<"DsaProblem"> | Date | string;
    contest?: Prisma.XOR<Prisma.ContestScalarRelationFilter, Prisma.ContestWhereInput>;
    dsaSubmissions?: Prisma.DsaSubmissionListRelationFilter;
    testCases?: Prisma.TestCaseListRelationFilter;
};
export type DsaProblemOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    contestId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    tags?: Prisma.SortOrder;
    points?: Prisma.SortOrder;
    timeLimit?: Prisma.SortOrder;
    memoryLimit?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    contest?: Prisma.ContestOrderByWithRelationInput;
    dsaSubmissions?: Prisma.DsaSubmissionOrderByRelationAggregateInput;
    testCases?: Prisma.TestCaseOrderByRelationAggregateInput;
};
export type DsaProblemWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.DsaProblemWhereInput | Prisma.DsaProblemWhereInput[];
    OR?: Prisma.DsaProblemWhereInput[];
    NOT?: Prisma.DsaProblemWhereInput | Prisma.DsaProblemWhereInput[];
    contestId?: Prisma.StringFilter<"DsaProblem"> | string;
    title?: Prisma.StringFilter<"DsaProblem"> | string;
    description?: Prisma.StringFilter<"DsaProblem"> | string;
    tags?: Prisma.JsonFilter<"DsaProblem">;
    points?: Prisma.IntFilter<"DsaProblem"> | number;
    timeLimit?: Prisma.IntFilter<"DsaProblem"> | number;
    memoryLimit?: Prisma.IntFilter<"DsaProblem"> | number;
    createdAt?: Prisma.DateTimeFilter<"DsaProblem"> | Date | string;
    contest?: Prisma.XOR<Prisma.ContestScalarRelationFilter, Prisma.ContestWhereInput>;
    dsaSubmissions?: Prisma.DsaSubmissionListRelationFilter;
    testCases?: Prisma.TestCaseListRelationFilter;
}, "id">;
export type DsaProblemOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    contestId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    tags?: Prisma.SortOrder;
    points?: Prisma.SortOrder;
    timeLimit?: Prisma.SortOrder;
    memoryLimit?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.DsaProblemCountOrderByAggregateInput;
    _avg?: Prisma.DsaProblemAvgOrderByAggregateInput;
    _max?: Prisma.DsaProblemMaxOrderByAggregateInput;
    _min?: Prisma.DsaProblemMinOrderByAggregateInput;
    _sum?: Prisma.DsaProblemSumOrderByAggregateInput;
};
export type DsaProblemScalarWhereWithAggregatesInput = {
    AND?: Prisma.DsaProblemScalarWhereWithAggregatesInput | Prisma.DsaProblemScalarWhereWithAggregatesInput[];
    OR?: Prisma.DsaProblemScalarWhereWithAggregatesInput[];
    NOT?: Prisma.DsaProblemScalarWhereWithAggregatesInput | Prisma.DsaProblemScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"DsaProblem"> | string;
    contestId?: Prisma.StringWithAggregatesFilter<"DsaProblem"> | string;
    title?: Prisma.StringWithAggregatesFilter<"DsaProblem"> | string;
    description?: Prisma.StringWithAggregatesFilter<"DsaProblem"> | string;
    tags?: Prisma.JsonWithAggregatesFilter<"DsaProblem">;
    points?: Prisma.IntWithAggregatesFilter<"DsaProblem"> | number;
    timeLimit?: Prisma.IntWithAggregatesFilter<"DsaProblem"> | number;
    memoryLimit?: Prisma.IntWithAggregatesFilter<"DsaProblem"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"DsaProblem"> | Date | string;
};
export type DsaProblemCreateInput = {
    id?: string;
    title: string;
    description: string;
    tags: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    points?: number;
    timeLimit?: number;
    memoryLimit?: number;
    createdAt?: Date | string;
    contest: Prisma.ContestCreateNestedOneWithoutDsaQuestionsInput;
    dsaSubmissions?: Prisma.DsaSubmissionCreateNestedManyWithoutDsaQuestionInput;
    testCases?: Prisma.TestCaseCreateNestedManyWithoutProblemInput;
};
export type DsaProblemUncheckedCreateInput = {
    id?: string;
    contestId: string;
    title: string;
    description: string;
    tags: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    points?: number;
    timeLimit?: number;
    memoryLimit?: number;
    createdAt?: Date | string;
    dsaSubmissions?: Prisma.DsaSubmissionUncheckedCreateNestedManyWithoutDsaQuestionInput;
    testCases?: Prisma.TestCaseUncheckedCreateNestedManyWithoutProblemInput;
};
export type DsaProblemUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    tags?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    points?: Prisma.IntFieldUpdateOperationsInput | number;
    timeLimit?: Prisma.IntFieldUpdateOperationsInput | number;
    memoryLimit?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    contest?: Prisma.ContestUpdateOneRequiredWithoutDsaQuestionsNestedInput;
    dsaSubmissions?: Prisma.DsaSubmissionUpdateManyWithoutDsaQuestionNestedInput;
    testCases?: Prisma.TestCaseUpdateManyWithoutProblemNestedInput;
};
export type DsaProblemUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    contestId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    tags?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    points?: Prisma.IntFieldUpdateOperationsInput | number;
    timeLimit?: Prisma.IntFieldUpdateOperationsInput | number;
    memoryLimit?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dsaSubmissions?: Prisma.DsaSubmissionUncheckedUpdateManyWithoutDsaQuestionNestedInput;
    testCases?: Prisma.TestCaseUncheckedUpdateManyWithoutProblemNestedInput;
};
export type DsaProblemCreateManyInput = {
    id?: string;
    contestId: string;
    title: string;
    description: string;
    tags: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    points?: number;
    timeLimit?: number;
    memoryLimit?: number;
    createdAt?: Date | string;
};
export type DsaProblemUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    tags?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    points?: Prisma.IntFieldUpdateOperationsInput | number;
    timeLimit?: Prisma.IntFieldUpdateOperationsInput | number;
    memoryLimit?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DsaProblemUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    contestId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    tags?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    points?: Prisma.IntFieldUpdateOperationsInput | number;
    timeLimit?: Prisma.IntFieldUpdateOperationsInput | number;
    memoryLimit?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DsaProblemListRelationFilter = {
    every?: Prisma.DsaProblemWhereInput;
    some?: Prisma.DsaProblemWhereInput;
    none?: Prisma.DsaProblemWhereInput;
};
export type DsaProblemOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type DsaProblemCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    contestId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    tags?: Prisma.SortOrder;
    points?: Prisma.SortOrder;
    timeLimit?: Prisma.SortOrder;
    memoryLimit?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type DsaProblemAvgOrderByAggregateInput = {
    points?: Prisma.SortOrder;
    timeLimit?: Prisma.SortOrder;
    memoryLimit?: Prisma.SortOrder;
};
export type DsaProblemMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    contestId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    points?: Prisma.SortOrder;
    timeLimit?: Prisma.SortOrder;
    memoryLimit?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type DsaProblemMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    contestId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    points?: Prisma.SortOrder;
    timeLimit?: Prisma.SortOrder;
    memoryLimit?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type DsaProblemSumOrderByAggregateInput = {
    points?: Prisma.SortOrder;
    timeLimit?: Prisma.SortOrder;
    memoryLimit?: Prisma.SortOrder;
};
export type DsaProblemScalarRelationFilter = {
    is?: Prisma.DsaProblemWhereInput;
    isNot?: Prisma.DsaProblemWhereInput;
};
export type DsaProblemCreateNestedManyWithoutContestInput = {
    create?: Prisma.XOR<Prisma.DsaProblemCreateWithoutContestInput, Prisma.DsaProblemUncheckedCreateWithoutContestInput> | Prisma.DsaProblemCreateWithoutContestInput[] | Prisma.DsaProblemUncheckedCreateWithoutContestInput[];
    connectOrCreate?: Prisma.DsaProblemCreateOrConnectWithoutContestInput | Prisma.DsaProblemCreateOrConnectWithoutContestInput[];
    createMany?: Prisma.DsaProblemCreateManyContestInputEnvelope;
    connect?: Prisma.DsaProblemWhereUniqueInput | Prisma.DsaProblemWhereUniqueInput[];
};
export type DsaProblemUncheckedCreateNestedManyWithoutContestInput = {
    create?: Prisma.XOR<Prisma.DsaProblemCreateWithoutContestInput, Prisma.DsaProblemUncheckedCreateWithoutContestInput> | Prisma.DsaProblemCreateWithoutContestInput[] | Prisma.DsaProblemUncheckedCreateWithoutContestInput[];
    connectOrCreate?: Prisma.DsaProblemCreateOrConnectWithoutContestInput | Prisma.DsaProblemCreateOrConnectWithoutContestInput[];
    createMany?: Prisma.DsaProblemCreateManyContestInputEnvelope;
    connect?: Prisma.DsaProblemWhereUniqueInput | Prisma.DsaProblemWhereUniqueInput[];
};
export type DsaProblemUpdateManyWithoutContestNestedInput = {
    create?: Prisma.XOR<Prisma.DsaProblemCreateWithoutContestInput, Prisma.DsaProblemUncheckedCreateWithoutContestInput> | Prisma.DsaProblemCreateWithoutContestInput[] | Prisma.DsaProblemUncheckedCreateWithoutContestInput[];
    connectOrCreate?: Prisma.DsaProblemCreateOrConnectWithoutContestInput | Prisma.DsaProblemCreateOrConnectWithoutContestInput[];
    upsert?: Prisma.DsaProblemUpsertWithWhereUniqueWithoutContestInput | Prisma.DsaProblemUpsertWithWhereUniqueWithoutContestInput[];
    createMany?: Prisma.DsaProblemCreateManyContestInputEnvelope;
    set?: Prisma.DsaProblemWhereUniqueInput | Prisma.DsaProblemWhereUniqueInput[];
    disconnect?: Prisma.DsaProblemWhereUniqueInput | Prisma.DsaProblemWhereUniqueInput[];
    delete?: Prisma.DsaProblemWhereUniqueInput | Prisma.DsaProblemWhereUniqueInput[];
    connect?: Prisma.DsaProblemWhereUniqueInput | Prisma.DsaProblemWhereUniqueInput[];
    update?: Prisma.DsaProblemUpdateWithWhereUniqueWithoutContestInput | Prisma.DsaProblemUpdateWithWhereUniqueWithoutContestInput[];
    updateMany?: Prisma.DsaProblemUpdateManyWithWhereWithoutContestInput | Prisma.DsaProblemUpdateManyWithWhereWithoutContestInput[];
    deleteMany?: Prisma.DsaProblemScalarWhereInput | Prisma.DsaProblemScalarWhereInput[];
};
export type DsaProblemUncheckedUpdateManyWithoutContestNestedInput = {
    create?: Prisma.XOR<Prisma.DsaProblemCreateWithoutContestInput, Prisma.DsaProblemUncheckedCreateWithoutContestInput> | Prisma.DsaProblemCreateWithoutContestInput[] | Prisma.DsaProblemUncheckedCreateWithoutContestInput[];
    connectOrCreate?: Prisma.DsaProblemCreateOrConnectWithoutContestInput | Prisma.DsaProblemCreateOrConnectWithoutContestInput[];
    upsert?: Prisma.DsaProblemUpsertWithWhereUniqueWithoutContestInput | Prisma.DsaProblemUpsertWithWhereUniqueWithoutContestInput[];
    createMany?: Prisma.DsaProblemCreateManyContestInputEnvelope;
    set?: Prisma.DsaProblemWhereUniqueInput | Prisma.DsaProblemWhereUniqueInput[];
    disconnect?: Prisma.DsaProblemWhereUniqueInput | Prisma.DsaProblemWhereUniqueInput[];
    delete?: Prisma.DsaProblemWhereUniqueInput | Prisma.DsaProblemWhereUniqueInput[];
    connect?: Prisma.DsaProblemWhereUniqueInput | Prisma.DsaProblemWhereUniqueInput[];
    update?: Prisma.DsaProblemUpdateWithWhereUniqueWithoutContestInput | Prisma.DsaProblemUpdateWithWhereUniqueWithoutContestInput[];
    updateMany?: Prisma.DsaProblemUpdateManyWithWhereWithoutContestInput | Prisma.DsaProblemUpdateManyWithWhereWithoutContestInput[];
    deleteMany?: Prisma.DsaProblemScalarWhereInput | Prisma.DsaProblemScalarWhereInput[];
};
export type DsaProblemCreateNestedOneWithoutTestCasesInput = {
    create?: Prisma.XOR<Prisma.DsaProblemCreateWithoutTestCasesInput, Prisma.DsaProblemUncheckedCreateWithoutTestCasesInput>;
    connectOrCreate?: Prisma.DsaProblemCreateOrConnectWithoutTestCasesInput;
    connect?: Prisma.DsaProblemWhereUniqueInput;
};
export type DsaProblemUpdateOneRequiredWithoutTestCasesNestedInput = {
    create?: Prisma.XOR<Prisma.DsaProblemCreateWithoutTestCasesInput, Prisma.DsaProblemUncheckedCreateWithoutTestCasesInput>;
    connectOrCreate?: Prisma.DsaProblemCreateOrConnectWithoutTestCasesInput;
    upsert?: Prisma.DsaProblemUpsertWithoutTestCasesInput;
    connect?: Prisma.DsaProblemWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.DsaProblemUpdateToOneWithWhereWithoutTestCasesInput, Prisma.DsaProblemUpdateWithoutTestCasesInput>, Prisma.DsaProblemUncheckedUpdateWithoutTestCasesInput>;
};
export type DsaProblemCreateNestedOneWithoutDsaSubmissionsInput = {
    create?: Prisma.XOR<Prisma.DsaProblemCreateWithoutDsaSubmissionsInput, Prisma.DsaProblemUncheckedCreateWithoutDsaSubmissionsInput>;
    connectOrCreate?: Prisma.DsaProblemCreateOrConnectWithoutDsaSubmissionsInput;
    connect?: Prisma.DsaProblemWhereUniqueInput;
};
export type DsaProblemUpdateOneRequiredWithoutDsaSubmissionsNestedInput = {
    create?: Prisma.XOR<Prisma.DsaProblemCreateWithoutDsaSubmissionsInput, Prisma.DsaProblemUncheckedCreateWithoutDsaSubmissionsInput>;
    connectOrCreate?: Prisma.DsaProblemCreateOrConnectWithoutDsaSubmissionsInput;
    upsert?: Prisma.DsaProblemUpsertWithoutDsaSubmissionsInput;
    connect?: Prisma.DsaProblemWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.DsaProblemUpdateToOneWithWhereWithoutDsaSubmissionsInput, Prisma.DsaProblemUpdateWithoutDsaSubmissionsInput>, Prisma.DsaProblemUncheckedUpdateWithoutDsaSubmissionsInput>;
};
export type DsaProblemCreateWithoutContestInput = {
    id?: string;
    title: string;
    description: string;
    tags: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    points?: number;
    timeLimit?: number;
    memoryLimit?: number;
    createdAt?: Date | string;
    dsaSubmissions?: Prisma.DsaSubmissionCreateNestedManyWithoutDsaQuestionInput;
    testCases?: Prisma.TestCaseCreateNestedManyWithoutProblemInput;
};
export type DsaProblemUncheckedCreateWithoutContestInput = {
    id?: string;
    title: string;
    description: string;
    tags: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    points?: number;
    timeLimit?: number;
    memoryLimit?: number;
    createdAt?: Date | string;
    dsaSubmissions?: Prisma.DsaSubmissionUncheckedCreateNestedManyWithoutDsaQuestionInput;
    testCases?: Prisma.TestCaseUncheckedCreateNestedManyWithoutProblemInput;
};
export type DsaProblemCreateOrConnectWithoutContestInput = {
    where: Prisma.DsaProblemWhereUniqueInput;
    create: Prisma.XOR<Prisma.DsaProblemCreateWithoutContestInput, Prisma.DsaProblemUncheckedCreateWithoutContestInput>;
};
export type DsaProblemCreateManyContestInputEnvelope = {
    data: Prisma.DsaProblemCreateManyContestInput | Prisma.DsaProblemCreateManyContestInput[];
    skipDuplicates?: boolean;
};
export type DsaProblemUpsertWithWhereUniqueWithoutContestInput = {
    where: Prisma.DsaProblemWhereUniqueInput;
    update: Prisma.XOR<Prisma.DsaProblemUpdateWithoutContestInput, Prisma.DsaProblemUncheckedUpdateWithoutContestInput>;
    create: Prisma.XOR<Prisma.DsaProblemCreateWithoutContestInput, Prisma.DsaProblemUncheckedCreateWithoutContestInput>;
};
export type DsaProblemUpdateWithWhereUniqueWithoutContestInput = {
    where: Prisma.DsaProblemWhereUniqueInput;
    data: Prisma.XOR<Prisma.DsaProblemUpdateWithoutContestInput, Prisma.DsaProblemUncheckedUpdateWithoutContestInput>;
};
export type DsaProblemUpdateManyWithWhereWithoutContestInput = {
    where: Prisma.DsaProblemScalarWhereInput;
    data: Prisma.XOR<Prisma.DsaProblemUpdateManyMutationInput, Prisma.DsaProblemUncheckedUpdateManyWithoutContestInput>;
};
export type DsaProblemScalarWhereInput = {
    AND?: Prisma.DsaProblemScalarWhereInput | Prisma.DsaProblemScalarWhereInput[];
    OR?: Prisma.DsaProblemScalarWhereInput[];
    NOT?: Prisma.DsaProblemScalarWhereInput | Prisma.DsaProblemScalarWhereInput[];
    id?: Prisma.StringFilter<"DsaProblem"> | string;
    contestId?: Prisma.StringFilter<"DsaProblem"> | string;
    title?: Prisma.StringFilter<"DsaProblem"> | string;
    description?: Prisma.StringFilter<"DsaProblem"> | string;
    tags?: Prisma.JsonFilter<"DsaProblem">;
    points?: Prisma.IntFilter<"DsaProblem"> | number;
    timeLimit?: Prisma.IntFilter<"DsaProblem"> | number;
    memoryLimit?: Prisma.IntFilter<"DsaProblem"> | number;
    createdAt?: Prisma.DateTimeFilter<"DsaProblem"> | Date | string;
};
export type DsaProblemCreateWithoutTestCasesInput = {
    id?: string;
    title: string;
    description: string;
    tags: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    points?: number;
    timeLimit?: number;
    memoryLimit?: number;
    createdAt?: Date | string;
    contest: Prisma.ContestCreateNestedOneWithoutDsaQuestionsInput;
    dsaSubmissions?: Prisma.DsaSubmissionCreateNestedManyWithoutDsaQuestionInput;
};
export type DsaProblemUncheckedCreateWithoutTestCasesInput = {
    id?: string;
    contestId: string;
    title: string;
    description: string;
    tags: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    points?: number;
    timeLimit?: number;
    memoryLimit?: number;
    createdAt?: Date | string;
    dsaSubmissions?: Prisma.DsaSubmissionUncheckedCreateNestedManyWithoutDsaQuestionInput;
};
export type DsaProblemCreateOrConnectWithoutTestCasesInput = {
    where: Prisma.DsaProblemWhereUniqueInput;
    create: Prisma.XOR<Prisma.DsaProblemCreateWithoutTestCasesInput, Prisma.DsaProblemUncheckedCreateWithoutTestCasesInput>;
};
export type DsaProblemUpsertWithoutTestCasesInput = {
    update: Prisma.XOR<Prisma.DsaProblemUpdateWithoutTestCasesInput, Prisma.DsaProblemUncheckedUpdateWithoutTestCasesInput>;
    create: Prisma.XOR<Prisma.DsaProblemCreateWithoutTestCasesInput, Prisma.DsaProblemUncheckedCreateWithoutTestCasesInput>;
    where?: Prisma.DsaProblemWhereInput;
};
export type DsaProblemUpdateToOneWithWhereWithoutTestCasesInput = {
    where?: Prisma.DsaProblemWhereInput;
    data: Prisma.XOR<Prisma.DsaProblemUpdateWithoutTestCasesInput, Prisma.DsaProblemUncheckedUpdateWithoutTestCasesInput>;
};
export type DsaProblemUpdateWithoutTestCasesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    tags?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    points?: Prisma.IntFieldUpdateOperationsInput | number;
    timeLimit?: Prisma.IntFieldUpdateOperationsInput | number;
    memoryLimit?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    contest?: Prisma.ContestUpdateOneRequiredWithoutDsaQuestionsNestedInput;
    dsaSubmissions?: Prisma.DsaSubmissionUpdateManyWithoutDsaQuestionNestedInput;
};
export type DsaProblemUncheckedUpdateWithoutTestCasesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    contestId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    tags?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    points?: Prisma.IntFieldUpdateOperationsInput | number;
    timeLimit?: Prisma.IntFieldUpdateOperationsInput | number;
    memoryLimit?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dsaSubmissions?: Prisma.DsaSubmissionUncheckedUpdateManyWithoutDsaQuestionNestedInput;
};
export type DsaProblemCreateWithoutDsaSubmissionsInput = {
    id?: string;
    title: string;
    description: string;
    tags: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    points?: number;
    timeLimit?: number;
    memoryLimit?: number;
    createdAt?: Date | string;
    contest: Prisma.ContestCreateNestedOneWithoutDsaQuestionsInput;
    testCases?: Prisma.TestCaseCreateNestedManyWithoutProblemInput;
};
export type DsaProblemUncheckedCreateWithoutDsaSubmissionsInput = {
    id?: string;
    contestId: string;
    title: string;
    description: string;
    tags: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    points?: number;
    timeLimit?: number;
    memoryLimit?: number;
    createdAt?: Date | string;
    testCases?: Prisma.TestCaseUncheckedCreateNestedManyWithoutProblemInput;
};
export type DsaProblemCreateOrConnectWithoutDsaSubmissionsInput = {
    where: Prisma.DsaProblemWhereUniqueInput;
    create: Prisma.XOR<Prisma.DsaProblemCreateWithoutDsaSubmissionsInput, Prisma.DsaProblemUncheckedCreateWithoutDsaSubmissionsInput>;
};
export type DsaProblemUpsertWithoutDsaSubmissionsInput = {
    update: Prisma.XOR<Prisma.DsaProblemUpdateWithoutDsaSubmissionsInput, Prisma.DsaProblemUncheckedUpdateWithoutDsaSubmissionsInput>;
    create: Prisma.XOR<Prisma.DsaProblemCreateWithoutDsaSubmissionsInput, Prisma.DsaProblemUncheckedCreateWithoutDsaSubmissionsInput>;
    where?: Prisma.DsaProblemWhereInput;
};
export type DsaProblemUpdateToOneWithWhereWithoutDsaSubmissionsInput = {
    where?: Prisma.DsaProblemWhereInput;
    data: Prisma.XOR<Prisma.DsaProblemUpdateWithoutDsaSubmissionsInput, Prisma.DsaProblemUncheckedUpdateWithoutDsaSubmissionsInput>;
};
export type DsaProblemUpdateWithoutDsaSubmissionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    tags?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    points?: Prisma.IntFieldUpdateOperationsInput | number;
    timeLimit?: Prisma.IntFieldUpdateOperationsInput | number;
    memoryLimit?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    contest?: Prisma.ContestUpdateOneRequiredWithoutDsaQuestionsNestedInput;
    testCases?: Prisma.TestCaseUpdateManyWithoutProblemNestedInput;
};
export type DsaProblemUncheckedUpdateWithoutDsaSubmissionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    contestId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    tags?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    points?: Prisma.IntFieldUpdateOperationsInput | number;
    timeLimit?: Prisma.IntFieldUpdateOperationsInput | number;
    memoryLimit?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    testCases?: Prisma.TestCaseUncheckedUpdateManyWithoutProblemNestedInput;
};
export type DsaProblemCreateManyContestInput = {
    id?: string;
    title: string;
    description: string;
    tags: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    points?: number;
    timeLimit?: number;
    memoryLimit?: number;
    createdAt?: Date | string;
};
export type DsaProblemUpdateWithoutContestInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    tags?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    points?: Prisma.IntFieldUpdateOperationsInput | number;
    timeLimit?: Prisma.IntFieldUpdateOperationsInput | number;
    memoryLimit?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dsaSubmissions?: Prisma.DsaSubmissionUpdateManyWithoutDsaQuestionNestedInput;
    testCases?: Prisma.TestCaseUpdateManyWithoutProblemNestedInput;
};
export type DsaProblemUncheckedUpdateWithoutContestInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    tags?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    points?: Prisma.IntFieldUpdateOperationsInput | number;
    timeLimit?: Prisma.IntFieldUpdateOperationsInput | number;
    memoryLimit?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dsaSubmissions?: Prisma.DsaSubmissionUncheckedUpdateManyWithoutDsaQuestionNestedInput;
    testCases?: Prisma.TestCaseUncheckedUpdateManyWithoutProblemNestedInput;
};
export type DsaProblemUncheckedUpdateManyWithoutContestInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    tags?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    points?: Prisma.IntFieldUpdateOperationsInput | number;
    timeLimit?: Prisma.IntFieldUpdateOperationsInput | number;
    memoryLimit?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type DsaProblemCountOutputType
 */
export type DsaProblemCountOutputType = {
    dsaSubmissions: number;
    testCases: number;
};
export type DsaProblemCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    dsaSubmissions?: boolean | DsaProblemCountOutputTypeCountDsaSubmissionsArgs;
    testCases?: boolean | DsaProblemCountOutputTypeCountTestCasesArgs;
};
/**
 * DsaProblemCountOutputType without action
 */
export type DsaProblemCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DsaProblemCountOutputType
     */
    select?: Prisma.DsaProblemCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * DsaProblemCountOutputType without action
 */
export type DsaProblemCountOutputTypeCountDsaSubmissionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DsaSubmissionWhereInput;
};
/**
 * DsaProblemCountOutputType without action
 */
export type DsaProblemCountOutputTypeCountTestCasesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TestCaseWhereInput;
};
export type DsaProblemSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    contestId?: boolean;
    title?: boolean;
    description?: boolean;
    tags?: boolean;
    points?: boolean;
    timeLimit?: boolean;
    memoryLimit?: boolean;
    createdAt?: boolean;
    contest?: boolean | Prisma.ContestDefaultArgs<ExtArgs>;
    dsaSubmissions?: boolean | Prisma.DsaProblem$dsaSubmissionsArgs<ExtArgs>;
    testCases?: boolean | Prisma.DsaProblem$testCasesArgs<ExtArgs>;
    _count?: boolean | Prisma.DsaProblemCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["dsaProblem"]>;
export type DsaProblemSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    contestId?: boolean;
    title?: boolean;
    description?: boolean;
    tags?: boolean;
    points?: boolean;
    timeLimit?: boolean;
    memoryLimit?: boolean;
    createdAt?: boolean;
    contest?: boolean | Prisma.ContestDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["dsaProblem"]>;
export type DsaProblemSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    contestId?: boolean;
    title?: boolean;
    description?: boolean;
    tags?: boolean;
    points?: boolean;
    timeLimit?: boolean;
    memoryLimit?: boolean;
    createdAt?: boolean;
    contest?: boolean | Prisma.ContestDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["dsaProblem"]>;
export type DsaProblemSelectScalar = {
    id?: boolean;
    contestId?: boolean;
    title?: boolean;
    description?: boolean;
    tags?: boolean;
    points?: boolean;
    timeLimit?: boolean;
    memoryLimit?: boolean;
    createdAt?: boolean;
};
export type DsaProblemOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "contestId" | "title" | "description" | "tags" | "points" | "timeLimit" | "memoryLimit" | "createdAt", ExtArgs["result"]["dsaProblem"]>;
export type DsaProblemInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    contest?: boolean | Prisma.ContestDefaultArgs<ExtArgs>;
    dsaSubmissions?: boolean | Prisma.DsaProblem$dsaSubmissionsArgs<ExtArgs>;
    testCases?: boolean | Prisma.DsaProblem$testCasesArgs<ExtArgs>;
    _count?: boolean | Prisma.DsaProblemCountOutputTypeDefaultArgs<ExtArgs>;
};
export type DsaProblemIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    contest?: boolean | Prisma.ContestDefaultArgs<ExtArgs>;
};
export type DsaProblemIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    contest?: boolean | Prisma.ContestDefaultArgs<ExtArgs>;
};
export type $DsaProblemPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "DsaProblem";
    objects: {
        contest: Prisma.$ContestPayload<ExtArgs>;
        dsaSubmissions: Prisma.$DsaSubmissionPayload<ExtArgs>[];
        testCases: Prisma.$TestCasePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        contestId: string;
        title: string;
        description: string;
        tags: runtime.JsonValue;
        points: number;
        timeLimit: number;
        memoryLimit: number;
        createdAt: Date;
    }, ExtArgs["result"]["dsaProblem"]>;
    composites: {};
};
export type DsaProblemGetPayload<S extends boolean | null | undefined | DsaProblemDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$DsaProblemPayload, S>;
export type DsaProblemCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<DsaProblemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: DsaProblemCountAggregateInputType | true;
};
export interface DsaProblemDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['DsaProblem'];
        meta: {
            name: 'DsaProblem';
        };
    };
    /**
     * Find zero or one DsaProblem that matches the filter.
     * @param {DsaProblemFindUniqueArgs} args - Arguments to find a DsaProblem
     * @example
     * // Get one DsaProblem
     * const dsaProblem = await prisma.dsaProblem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DsaProblemFindUniqueArgs>(args: Prisma.SelectSubset<T, DsaProblemFindUniqueArgs<ExtArgs>>): Prisma.Prisma__DsaProblemClient<runtime.Types.Result.GetResult<Prisma.$DsaProblemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one DsaProblem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DsaProblemFindUniqueOrThrowArgs} args - Arguments to find a DsaProblem
     * @example
     * // Get one DsaProblem
     * const dsaProblem = await prisma.dsaProblem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DsaProblemFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, DsaProblemFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__DsaProblemClient<runtime.Types.Result.GetResult<Prisma.$DsaProblemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first DsaProblem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DsaProblemFindFirstArgs} args - Arguments to find a DsaProblem
     * @example
     * // Get one DsaProblem
     * const dsaProblem = await prisma.dsaProblem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DsaProblemFindFirstArgs>(args?: Prisma.SelectSubset<T, DsaProblemFindFirstArgs<ExtArgs>>): Prisma.Prisma__DsaProblemClient<runtime.Types.Result.GetResult<Prisma.$DsaProblemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first DsaProblem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DsaProblemFindFirstOrThrowArgs} args - Arguments to find a DsaProblem
     * @example
     * // Get one DsaProblem
     * const dsaProblem = await prisma.dsaProblem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DsaProblemFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, DsaProblemFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__DsaProblemClient<runtime.Types.Result.GetResult<Prisma.$DsaProblemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more DsaProblems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DsaProblemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DsaProblems
     * const dsaProblems = await prisma.dsaProblem.findMany()
     *
     * // Get first 10 DsaProblems
     * const dsaProblems = await prisma.dsaProblem.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const dsaProblemWithIdOnly = await prisma.dsaProblem.findMany({ select: { id: true } })
     *
     */
    findMany<T extends DsaProblemFindManyArgs>(args?: Prisma.SelectSubset<T, DsaProblemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DsaProblemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a DsaProblem.
     * @param {DsaProblemCreateArgs} args - Arguments to create a DsaProblem.
     * @example
     * // Create one DsaProblem
     * const DsaProblem = await prisma.dsaProblem.create({
     *   data: {
     *     // ... data to create a DsaProblem
     *   }
     * })
     *
     */
    create<T extends DsaProblemCreateArgs>(args: Prisma.SelectSubset<T, DsaProblemCreateArgs<ExtArgs>>): Prisma.Prisma__DsaProblemClient<runtime.Types.Result.GetResult<Prisma.$DsaProblemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many DsaProblems.
     * @param {DsaProblemCreateManyArgs} args - Arguments to create many DsaProblems.
     * @example
     * // Create many DsaProblems
     * const dsaProblem = await prisma.dsaProblem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends DsaProblemCreateManyArgs>(args?: Prisma.SelectSubset<T, DsaProblemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many DsaProblems and returns the data saved in the database.
     * @param {DsaProblemCreateManyAndReturnArgs} args - Arguments to create many DsaProblems.
     * @example
     * // Create many DsaProblems
     * const dsaProblem = await prisma.dsaProblem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many DsaProblems and only return the `id`
     * const dsaProblemWithIdOnly = await prisma.dsaProblem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends DsaProblemCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, DsaProblemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DsaProblemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a DsaProblem.
     * @param {DsaProblemDeleteArgs} args - Arguments to delete one DsaProblem.
     * @example
     * // Delete one DsaProblem
     * const DsaProblem = await prisma.dsaProblem.delete({
     *   where: {
     *     // ... filter to delete one DsaProblem
     *   }
     * })
     *
     */
    delete<T extends DsaProblemDeleteArgs>(args: Prisma.SelectSubset<T, DsaProblemDeleteArgs<ExtArgs>>): Prisma.Prisma__DsaProblemClient<runtime.Types.Result.GetResult<Prisma.$DsaProblemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one DsaProblem.
     * @param {DsaProblemUpdateArgs} args - Arguments to update one DsaProblem.
     * @example
     * // Update one DsaProblem
     * const dsaProblem = await prisma.dsaProblem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends DsaProblemUpdateArgs>(args: Prisma.SelectSubset<T, DsaProblemUpdateArgs<ExtArgs>>): Prisma.Prisma__DsaProblemClient<runtime.Types.Result.GetResult<Prisma.$DsaProblemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more DsaProblems.
     * @param {DsaProblemDeleteManyArgs} args - Arguments to filter DsaProblems to delete.
     * @example
     * // Delete a few DsaProblems
     * const { count } = await prisma.dsaProblem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends DsaProblemDeleteManyArgs>(args?: Prisma.SelectSubset<T, DsaProblemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more DsaProblems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DsaProblemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DsaProblems
     * const dsaProblem = await prisma.dsaProblem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends DsaProblemUpdateManyArgs>(args: Prisma.SelectSubset<T, DsaProblemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more DsaProblems and returns the data updated in the database.
     * @param {DsaProblemUpdateManyAndReturnArgs} args - Arguments to update many DsaProblems.
     * @example
     * // Update many DsaProblems
     * const dsaProblem = await prisma.dsaProblem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more DsaProblems and only return the `id`
     * const dsaProblemWithIdOnly = await prisma.dsaProblem.updateManyAndReturn({
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
    updateManyAndReturn<T extends DsaProblemUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, DsaProblemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DsaProblemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one DsaProblem.
     * @param {DsaProblemUpsertArgs} args - Arguments to update or create a DsaProblem.
     * @example
     * // Update or create a DsaProblem
     * const dsaProblem = await prisma.dsaProblem.upsert({
     *   create: {
     *     // ... data to create a DsaProblem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DsaProblem we want to update
     *   }
     * })
     */
    upsert<T extends DsaProblemUpsertArgs>(args: Prisma.SelectSubset<T, DsaProblemUpsertArgs<ExtArgs>>): Prisma.Prisma__DsaProblemClient<runtime.Types.Result.GetResult<Prisma.$DsaProblemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of DsaProblems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DsaProblemCountArgs} args - Arguments to filter DsaProblems to count.
     * @example
     * // Count the number of DsaProblems
     * const count = await prisma.dsaProblem.count({
     *   where: {
     *     // ... the filter for the DsaProblems we want to count
     *   }
     * })
    **/
    count<T extends DsaProblemCountArgs>(args?: Prisma.Subset<T, DsaProblemCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], DsaProblemCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a DsaProblem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DsaProblemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DsaProblemAggregateArgs>(args: Prisma.Subset<T, DsaProblemAggregateArgs>): Prisma.PrismaPromise<GetDsaProblemAggregateType<T>>;
    /**
     * Group by DsaProblem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DsaProblemGroupByArgs} args - Group by arguments.
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
    groupBy<T extends DsaProblemGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: DsaProblemGroupByArgs['orderBy'];
    } : {
        orderBy?: DsaProblemGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, DsaProblemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDsaProblemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the DsaProblem model
     */
    readonly fields: DsaProblemFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for DsaProblem.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__DsaProblemClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    contest<T extends Prisma.ContestDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ContestDefaultArgs<ExtArgs>>): Prisma.Prisma__ContestClient<runtime.Types.Result.GetResult<Prisma.$ContestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    dsaSubmissions<T extends Prisma.DsaProblem$dsaSubmissionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.DsaProblem$dsaSubmissionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DsaSubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    testCases<T extends Prisma.DsaProblem$testCasesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.DsaProblem$testCasesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TestCasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the DsaProblem model
 */
export interface DsaProblemFieldRefs {
    readonly id: Prisma.FieldRef<"DsaProblem", 'String'>;
    readonly contestId: Prisma.FieldRef<"DsaProblem", 'String'>;
    readonly title: Prisma.FieldRef<"DsaProblem", 'String'>;
    readonly description: Prisma.FieldRef<"DsaProblem", 'String'>;
    readonly tags: Prisma.FieldRef<"DsaProblem", 'Json'>;
    readonly points: Prisma.FieldRef<"DsaProblem", 'Int'>;
    readonly timeLimit: Prisma.FieldRef<"DsaProblem", 'Int'>;
    readonly memoryLimit: Prisma.FieldRef<"DsaProblem", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"DsaProblem", 'DateTime'>;
}
/**
 * DsaProblem findUnique
 */
export type DsaProblemFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DsaProblem
     */
    select?: Prisma.DsaProblemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DsaProblem
     */
    omit?: Prisma.DsaProblemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DsaProblemInclude<ExtArgs> | null;
    /**
     * Filter, which DsaProblem to fetch.
     */
    where: Prisma.DsaProblemWhereUniqueInput;
};
/**
 * DsaProblem findUniqueOrThrow
 */
export type DsaProblemFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DsaProblem
     */
    select?: Prisma.DsaProblemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DsaProblem
     */
    omit?: Prisma.DsaProblemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DsaProblemInclude<ExtArgs> | null;
    /**
     * Filter, which DsaProblem to fetch.
     */
    where: Prisma.DsaProblemWhereUniqueInput;
};
/**
 * DsaProblem findFirst
 */
export type DsaProblemFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DsaProblem
     */
    select?: Prisma.DsaProblemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DsaProblem
     */
    omit?: Prisma.DsaProblemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DsaProblemInclude<ExtArgs> | null;
    /**
     * Filter, which DsaProblem to fetch.
     */
    where?: Prisma.DsaProblemWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of DsaProblems to fetch.
     */
    orderBy?: Prisma.DsaProblemOrderByWithRelationInput | Prisma.DsaProblemOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for DsaProblems.
     */
    cursor?: Prisma.DsaProblemWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` DsaProblems from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` DsaProblems.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of DsaProblems.
     */
    distinct?: Prisma.DsaProblemScalarFieldEnum | Prisma.DsaProblemScalarFieldEnum[];
};
/**
 * DsaProblem findFirstOrThrow
 */
export type DsaProblemFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DsaProblem
     */
    select?: Prisma.DsaProblemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DsaProblem
     */
    omit?: Prisma.DsaProblemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DsaProblemInclude<ExtArgs> | null;
    /**
     * Filter, which DsaProblem to fetch.
     */
    where?: Prisma.DsaProblemWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of DsaProblems to fetch.
     */
    orderBy?: Prisma.DsaProblemOrderByWithRelationInput | Prisma.DsaProblemOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for DsaProblems.
     */
    cursor?: Prisma.DsaProblemWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` DsaProblems from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` DsaProblems.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of DsaProblems.
     */
    distinct?: Prisma.DsaProblemScalarFieldEnum | Prisma.DsaProblemScalarFieldEnum[];
};
/**
 * DsaProblem findMany
 */
export type DsaProblemFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DsaProblem
     */
    select?: Prisma.DsaProblemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DsaProblem
     */
    omit?: Prisma.DsaProblemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DsaProblemInclude<ExtArgs> | null;
    /**
     * Filter, which DsaProblems to fetch.
     */
    where?: Prisma.DsaProblemWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of DsaProblems to fetch.
     */
    orderBy?: Prisma.DsaProblemOrderByWithRelationInput | Prisma.DsaProblemOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing DsaProblems.
     */
    cursor?: Prisma.DsaProblemWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` DsaProblems from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` DsaProblems.
     */
    skip?: number;
    distinct?: Prisma.DsaProblemScalarFieldEnum | Prisma.DsaProblemScalarFieldEnum[];
};
/**
 * DsaProblem create
 */
export type DsaProblemCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DsaProblem
     */
    select?: Prisma.DsaProblemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DsaProblem
     */
    omit?: Prisma.DsaProblemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DsaProblemInclude<ExtArgs> | null;
    /**
     * The data needed to create a DsaProblem.
     */
    data: Prisma.XOR<Prisma.DsaProblemCreateInput, Prisma.DsaProblemUncheckedCreateInput>;
};
/**
 * DsaProblem createMany
 */
export type DsaProblemCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many DsaProblems.
     */
    data: Prisma.DsaProblemCreateManyInput | Prisma.DsaProblemCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * DsaProblem createManyAndReturn
 */
export type DsaProblemCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DsaProblem
     */
    select?: Prisma.DsaProblemSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the DsaProblem
     */
    omit?: Prisma.DsaProblemOmit<ExtArgs> | null;
    /**
     * The data used to create many DsaProblems.
     */
    data: Prisma.DsaProblemCreateManyInput | Prisma.DsaProblemCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DsaProblemIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * DsaProblem update
 */
export type DsaProblemUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DsaProblem
     */
    select?: Prisma.DsaProblemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DsaProblem
     */
    omit?: Prisma.DsaProblemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DsaProblemInclude<ExtArgs> | null;
    /**
     * The data needed to update a DsaProblem.
     */
    data: Prisma.XOR<Prisma.DsaProblemUpdateInput, Prisma.DsaProblemUncheckedUpdateInput>;
    /**
     * Choose, which DsaProblem to update.
     */
    where: Prisma.DsaProblemWhereUniqueInput;
};
/**
 * DsaProblem updateMany
 */
export type DsaProblemUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update DsaProblems.
     */
    data: Prisma.XOR<Prisma.DsaProblemUpdateManyMutationInput, Prisma.DsaProblemUncheckedUpdateManyInput>;
    /**
     * Filter which DsaProblems to update
     */
    where?: Prisma.DsaProblemWhereInput;
    /**
     * Limit how many DsaProblems to update.
     */
    limit?: number;
};
/**
 * DsaProblem updateManyAndReturn
 */
export type DsaProblemUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DsaProblem
     */
    select?: Prisma.DsaProblemSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the DsaProblem
     */
    omit?: Prisma.DsaProblemOmit<ExtArgs> | null;
    /**
     * The data used to update DsaProblems.
     */
    data: Prisma.XOR<Prisma.DsaProblemUpdateManyMutationInput, Prisma.DsaProblemUncheckedUpdateManyInput>;
    /**
     * Filter which DsaProblems to update
     */
    where?: Prisma.DsaProblemWhereInput;
    /**
     * Limit how many DsaProblems to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DsaProblemIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * DsaProblem upsert
 */
export type DsaProblemUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DsaProblem
     */
    select?: Prisma.DsaProblemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DsaProblem
     */
    omit?: Prisma.DsaProblemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DsaProblemInclude<ExtArgs> | null;
    /**
     * The filter to search for the DsaProblem to update in case it exists.
     */
    where: Prisma.DsaProblemWhereUniqueInput;
    /**
     * In case the DsaProblem found by the `where` argument doesn't exist, create a new DsaProblem with this data.
     */
    create: Prisma.XOR<Prisma.DsaProblemCreateInput, Prisma.DsaProblemUncheckedCreateInput>;
    /**
     * In case the DsaProblem was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.DsaProblemUpdateInput, Prisma.DsaProblemUncheckedUpdateInput>;
};
/**
 * DsaProblem delete
 */
export type DsaProblemDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DsaProblem
     */
    select?: Prisma.DsaProblemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DsaProblem
     */
    omit?: Prisma.DsaProblemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DsaProblemInclude<ExtArgs> | null;
    /**
     * Filter which DsaProblem to delete.
     */
    where: Prisma.DsaProblemWhereUniqueInput;
};
/**
 * DsaProblem deleteMany
 */
export type DsaProblemDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which DsaProblems to delete
     */
    where?: Prisma.DsaProblemWhereInput;
    /**
     * Limit how many DsaProblems to delete.
     */
    limit?: number;
};
/**
 * DsaProblem.dsaSubmissions
 */
export type DsaProblem$dsaSubmissionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.DsaSubmissionWhereInput;
    orderBy?: Prisma.DsaSubmissionOrderByWithRelationInput | Prisma.DsaSubmissionOrderByWithRelationInput[];
    cursor?: Prisma.DsaSubmissionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DsaSubmissionScalarFieldEnum | Prisma.DsaSubmissionScalarFieldEnum[];
};
/**
 * DsaProblem.testCases
 */
export type DsaProblem$testCasesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCase
     */
    select?: Prisma.TestCaseSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TestCase
     */
    omit?: Prisma.TestCaseOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TestCaseInclude<ExtArgs> | null;
    where?: Prisma.TestCaseWhereInput;
    orderBy?: Prisma.TestCaseOrderByWithRelationInput | Prisma.TestCaseOrderByWithRelationInput[];
    cursor?: Prisma.TestCaseWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TestCaseScalarFieldEnum | Prisma.TestCaseScalarFieldEnum[];
};
/**
 * DsaProblem without action
 */
export type DsaProblemDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DsaProblem
     */
    select?: Prisma.DsaProblemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DsaProblem
     */
    omit?: Prisma.DsaProblemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DsaProblemInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=DsaProblem.d.ts.map