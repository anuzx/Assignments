import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model McqQuestion
 *
 */
export type McqQuestionModel = runtime.Types.Result.DefaultSelection<Prisma.$McqQuestionPayload>;
export type AggregateMcqQuestion = {
    _count: McqQuestionCountAggregateOutputType | null;
    _avg: McqQuestionAvgAggregateOutputType | null;
    _sum: McqQuestionSumAggregateOutputType | null;
    _min: McqQuestionMinAggregateOutputType | null;
    _max: McqQuestionMaxAggregateOutputType | null;
};
export type McqQuestionAvgAggregateOutputType = {
    correctOptionIndex: number | null;
    points: number | null;
};
export type McqQuestionSumAggregateOutputType = {
    correctOptionIndex: number | null;
    points: number | null;
};
export type McqQuestionMinAggregateOutputType = {
    id: string | null;
    contestId: string | null;
    questionText: string | null;
    correctOptionIndex: number | null;
    points: number | null;
    createdAt: Date | null;
};
export type McqQuestionMaxAggregateOutputType = {
    id: string | null;
    contestId: string | null;
    questionText: string | null;
    correctOptionIndex: number | null;
    points: number | null;
    createdAt: Date | null;
};
export type McqQuestionCountAggregateOutputType = {
    id: number;
    contestId: number;
    questionText: number;
    options: number;
    correctOptionIndex: number;
    points: number;
    createdAt: number;
    _all: number;
};
export type McqQuestionAvgAggregateInputType = {
    correctOptionIndex?: true;
    points?: true;
};
export type McqQuestionSumAggregateInputType = {
    correctOptionIndex?: true;
    points?: true;
};
export type McqQuestionMinAggregateInputType = {
    id?: true;
    contestId?: true;
    questionText?: true;
    correctOptionIndex?: true;
    points?: true;
    createdAt?: true;
};
export type McqQuestionMaxAggregateInputType = {
    id?: true;
    contestId?: true;
    questionText?: true;
    correctOptionIndex?: true;
    points?: true;
    createdAt?: true;
};
export type McqQuestionCountAggregateInputType = {
    id?: true;
    contestId?: true;
    questionText?: true;
    options?: true;
    correctOptionIndex?: true;
    points?: true;
    createdAt?: true;
    _all?: true;
};
export type McqQuestionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which McqQuestion to aggregate.
     */
    where?: Prisma.McqQuestionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of McqQuestions to fetch.
     */
    orderBy?: Prisma.McqQuestionOrderByWithRelationInput | Prisma.McqQuestionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.McqQuestionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` McqQuestions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` McqQuestions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned McqQuestions
    **/
    _count?: true | McqQuestionCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: McqQuestionAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: McqQuestionSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: McqQuestionMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: McqQuestionMaxAggregateInputType;
};
export type GetMcqQuestionAggregateType<T extends McqQuestionAggregateArgs> = {
    [P in keyof T & keyof AggregateMcqQuestion]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMcqQuestion[P]> : Prisma.GetScalarType<T[P], AggregateMcqQuestion[P]>;
};
export type McqQuestionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.McqQuestionWhereInput;
    orderBy?: Prisma.McqQuestionOrderByWithAggregationInput | Prisma.McqQuestionOrderByWithAggregationInput[];
    by: Prisma.McqQuestionScalarFieldEnum[] | Prisma.McqQuestionScalarFieldEnum;
    having?: Prisma.McqQuestionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: McqQuestionCountAggregateInputType | true;
    _avg?: McqQuestionAvgAggregateInputType;
    _sum?: McqQuestionSumAggregateInputType;
    _min?: McqQuestionMinAggregateInputType;
    _max?: McqQuestionMaxAggregateInputType;
};
export type McqQuestionGroupByOutputType = {
    id: string;
    contestId: string;
    questionText: string;
    options: runtime.JsonValue;
    correctOptionIndex: number;
    points: number;
    createdAt: Date;
    _count: McqQuestionCountAggregateOutputType | null;
    _avg: McqQuestionAvgAggregateOutputType | null;
    _sum: McqQuestionSumAggregateOutputType | null;
    _min: McqQuestionMinAggregateOutputType | null;
    _max: McqQuestionMaxAggregateOutputType | null;
};
type GetMcqQuestionGroupByPayload<T extends McqQuestionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<McqQuestionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof McqQuestionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], McqQuestionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], McqQuestionGroupByOutputType[P]>;
}>>;
export type McqQuestionWhereInput = {
    AND?: Prisma.McqQuestionWhereInput | Prisma.McqQuestionWhereInput[];
    OR?: Prisma.McqQuestionWhereInput[];
    NOT?: Prisma.McqQuestionWhereInput | Prisma.McqQuestionWhereInput[];
    id?: Prisma.StringFilter<"McqQuestion"> | string;
    contestId?: Prisma.StringFilter<"McqQuestion"> | string;
    questionText?: Prisma.StringFilter<"McqQuestion"> | string;
    options?: Prisma.JsonFilter<"McqQuestion">;
    correctOptionIndex?: Prisma.IntFilter<"McqQuestion"> | number;
    points?: Prisma.IntFilter<"McqQuestion"> | number;
    createdAt?: Prisma.DateTimeFilter<"McqQuestion"> | Date | string;
    contest?: Prisma.XOR<Prisma.ContestScalarRelationFilter, Prisma.ContestWhereInput>;
    mcqSubmissions?: Prisma.McqSubmissionListRelationFilter;
};
export type McqQuestionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    contestId?: Prisma.SortOrder;
    questionText?: Prisma.SortOrder;
    options?: Prisma.SortOrder;
    correctOptionIndex?: Prisma.SortOrder;
    points?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    contest?: Prisma.ContestOrderByWithRelationInput;
    mcqSubmissions?: Prisma.McqSubmissionOrderByRelationAggregateInput;
};
export type McqQuestionWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.McqQuestionWhereInput | Prisma.McqQuestionWhereInput[];
    OR?: Prisma.McqQuestionWhereInput[];
    NOT?: Prisma.McqQuestionWhereInput | Prisma.McqQuestionWhereInput[];
    contestId?: Prisma.StringFilter<"McqQuestion"> | string;
    questionText?: Prisma.StringFilter<"McqQuestion"> | string;
    options?: Prisma.JsonFilter<"McqQuestion">;
    correctOptionIndex?: Prisma.IntFilter<"McqQuestion"> | number;
    points?: Prisma.IntFilter<"McqQuestion"> | number;
    createdAt?: Prisma.DateTimeFilter<"McqQuestion"> | Date | string;
    contest?: Prisma.XOR<Prisma.ContestScalarRelationFilter, Prisma.ContestWhereInput>;
    mcqSubmissions?: Prisma.McqSubmissionListRelationFilter;
}, "id">;
export type McqQuestionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    contestId?: Prisma.SortOrder;
    questionText?: Prisma.SortOrder;
    options?: Prisma.SortOrder;
    correctOptionIndex?: Prisma.SortOrder;
    points?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.McqQuestionCountOrderByAggregateInput;
    _avg?: Prisma.McqQuestionAvgOrderByAggregateInput;
    _max?: Prisma.McqQuestionMaxOrderByAggregateInput;
    _min?: Prisma.McqQuestionMinOrderByAggregateInput;
    _sum?: Prisma.McqQuestionSumOrderByAggregateInput;
};
export type McqQuestionScalarWhereWithAggregatesInput = {
    AND?: Prisma.McqQuestionScalarWhereWithAggregatesInput | Prisma.McqQuestionScalarWhereWithAggregatesInput[];
    OR?: Prisma.McqQuestionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.McqQuestionScalarWhereWithAggregatesInput | Prisma.McqQuestionScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"McqQuestion"> | string;
    contestId?: Prisma.StringWithAggregatesFilter<"McqQuestion"> | string;
    questionText?: Prisma.StringWithAggregatesFilter<"McqQuestion"> | string;
    options?: Prisma.JsonWithAggregatesFilter<"McqQuestion">;
    correctOptionIndex?: Prisma.IntWithAggregatesFilter<"McqQuestion"> | number;
    points?: Prisma.IntWithAggregatesFilter<"McqQuestion"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"McqQuestion"> | Date | string;
};
export type McqQuestionCreateInput = {
    id?: string;
    questionText: string;
    options: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    correctOptionIndex: number;
    points?: number;
    createdAt?: Date | string;
    contest: Prisma.ContestCreateNestedOneWithoutMcqQuestionsInput;
    mcqSubmissions?: Prisma.McqSubmissionCreateNestedManyWithoutMcqQuestionInput;
};
export type McqQuestionUncheckedCreateInput = {
    id?: string;
    contestId: string;
    questionText: string;
    options: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    correctOptionIndex: number;
    points?: number;
    createdAt?: Date | string;
    mcqSubmissions?: Prisma.McqSubmissionUncheckedCreateNestedManyWithoutMcqQuestionInput;
};
export type McqQuestionUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    questionText?: Prisma.StringFieldUpdateOperationsInput | string;
    options?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    correctOptionIndex?: Prisma.IntFieldUpdateOperationsInput | number;
    points?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    contest?: Prisma.ContestUpdateOneRequiredWithoutMcqQuestionsNestedInput;
    mcqSubmissions?: Prisma.McqSubmissionUpdateManyWithoutMcqQuestionNestedInput;
};
export type McqQuestionUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    contestId?: Prisma.StringFieldUpdateOperationsInput | string;
    questionText?: Prisma.StringFieldUpdateOperationsInput | string;
    options?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    correctOptionIndex?: Prisma.IntFieldUpdateOperationsInput | number;
    points?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    mcqSubmissions?: Prisma.McqSubmissionUncheckedUpdateManyWithoutMcqQuestionNestedInput;
};
export type McqQuestionCreateManyInput = {
    id?: string;
    contestId: string;
    questionText: string;
    options: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    correctOptionIndex: number;
    points?: number;
    createdAt?: Date | string;
};
export type McqQuestionUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    questionText?: Prisma.StringFieldUpdateOperationsInput | string;
    options?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    correctOptionIndex?: Prisma.IntFieldUpdateOperationsInput | number;
    points?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type McqQuestionUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    contestId?: Prisma.StringFieldUpdateOperationsInput | string;
    questionText?: Prisma.StringFieldUpdateOperationsInput | string;
    options?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    correctOptionIndex?: Prisma.IntFieldUpdateOperationsInput | number;
    points?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type McqQuestionListRelationFilter = {
    every?: Prisma.McqQuestionWhereInput;
    some?: Prisma.McqQuestionWhereInput;
    none?: Prisma.McqQuestionWhereInput;
};
export type McqQuestionOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type McqQuestionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    contestId?: Prisma.SortOrder;
    questionText?: Prisma.SortOrder;
    options?: Prisma.SortOrder;
    correctOptionIndex?: Prisma.SortOrder;
    points?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type McqQuestionAvgOrderByAggregateInput = {
    correctOptionIndex?: Prisma.SortOrder;
    points?: Prisma.SortOrder;
};
export type McqQuestionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    contestId?: Prisma.SortOrder;
    questionText?: Prisma.SortOrder;
    correctOptionIndex?: Prisma.SortOrder;
    points?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type McqQuestionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    contestId?: Prisma.SortOrder;
    questionText?: Prisma.SortOrder;
    correctOptionIndex?: Prisma.SortOrder;
    points?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type McqQuestionSumOrderByAggregateInput = {
    correctOptionIndex?: Prisma.SortOrder;
    points?: Prisma.SortOrder;
};
export type McqQuestionScalarRelationFilter = {
    is?: Prisma.McqQuestionWhereInput;
    isNot?: Prisma.McqQuestionWhereInput;
};
export type McqQuestionCreateNestedManyWithoutContestInput = {
    create?: Prisma.XOR<Prisma.McqQuestionCreateWithoutContestInput, Prisma.McqQuestionUncheckedCreateWithoutContestInput> | Prisma.McqQuestionCreateWithoutContestInput[] | Prisma.McqQuestionUncheckedCreateWithoutContestInput[];
    connectOrCreate?: Prisma.McqQuestionCreateOrConnectWithoutContestInput | Prisma.McqQuestionCreateOrConnectWithoutContestInput[];
    createMany?: Prisma.McqQuestionCreateManyContestInputEnvelope;
    connect?: Prisma.McqQuestionWhereUniqueInput | Prisma.McqQuestionWhereUniqueInput[];
};
export type McqQuestionUncheckedCreateNestedManyWithoutContestInput = {
    create?: Prisma.XOR<Prisma.McqQuestionCreateWithoutContestInput, Prisma.McqQuestionUncheckedCreateWithoutContestInput> | Prisma.McqQuestionCreateWithoutContestInput[] | Prisma.McqQuestionUncheckedCreateWithoutContestInput[];
    connectOrCreate?: Prisma.McqQuestionCreateOrConnectWithoutContestInput | Prisma.McqQuestionCreateOrConnectWithoutContestInput[];
    createMany?: Prisma.McqQuestionCreateManyContestInputEnvelope;
    connect?: Prisma.McqQuestionWhereUniqueInput | Prisma.McqQuestionWhereUniqueInput[];
};
export type McqQuestionUpdateManyWithoutContestNestedInput = {
    create?: Prisma.XOR<Prisma.McqQuestionCreateWithoutContestInput, Prisma.McqQuestionUncheckedCreateWithoutContestInput> | Prisma.McqQuestionCreateWithoutContestInput[] | Prisma.McqQuestionUncheckedCreateWithoutContestInput[];
    connectOrCreate?: Prisma.McqQuestionCreateOrConnectWithoutContestInput | Prisma.McqQuestionCreateOrConnectWithoutContestInput[];
    upsert?: Prisma.McqQuestionUpsertWithWhereUniqueWithoutContestInput | Prisma.McqQuestionUpsertWithWhereUniqueWithoutContestInput[];
    createMany?: Prisma.McqQuestionCreateManyContestInputEnvelope;
    set?: Prisma.McqQuestionWhereUniqueInput | Prisma.McqQuestionWhereUniqueInput[];
    disconnect?: Prisma.McqQuestionWhereUniqueInput | Prisma.McqQuestionWhereUniqueInput[];
    delete?: Prisma.McqQuestionWhereUniqueInput | Prisma.McqQuestionWhereUniqueInput[];
    connect?: Prisma.McqQuestionWhereUniqueInput | Prisma.McqQuestionWhereUniqueInput[];
    update?: Prisma.McqQuestionUpdateWithWhereUniqueWithoutContestInput | Prisma.McqQuestionUpdateWithWhereUniqueWithoutContestInput[];
    updateMany?: Prisma.McqQuestionUpdateManyWithWhereWithoutContestInput | Prisma.McqQuestionUpdateManyWithWhereWithoutContestInput[];
    deleteMany?: Prisma.McqQuestionScalarWhereInput | Prisma.McqQuestionScalarWhereInput[];
};
export type McqQuestionUncheckedUpdateManyWithoutContestNestedInput = {
    create?: Prisma.XOR<Prisma.McqQuestionCreateWithoutContestInput, Prisma.McqQuestionUncheckedCreateWithoutContestInput> | Prisma.McqQuestionCreateWithoutContestInput[] | Prisma.McqQuestionUncheckedCreateWithoutContestInput[];
    connectOrCreate?: Prisma.McqQuestionCreateOrConnectWithoutContestInput | Prisma.McqQuestionCreateOrConnectWithoutContestInput[];
    upsert?: Prisma.McqQuestionUpsertWithWhereUniqueWithoutContestInput | Prisma.McqQuestionUpsertWithWhereUniqueWithoutContestInput[];
    createMany?: Prisma.McqQuestionCreateManyContestInputEnvelope;
    set?: Prisma.McqQuestionWhereUniqueInput | Prisma.McqQuestionWhereUniqueInput[];
    disconnect?: Prisma.McqQuestionWhereUniqueInput | Prisma.McqQuestionWhereUniqueInput[];
    delete?: Prisma.McqQuestionWhereUniqueInput | Prisma.McqQuestionWhereUniqueInput[];
    connect?: Prisma.McqQuestionWhereUniqueInput | Prisma.McqQuestionWhereUniqueInput[];
    update?: Prisma.McqQuestionUpdateWithWhereUniqueWithoutContestInput | Prisma.McqQuestionUpdateWithWhereUniqueWithoutContestInput[];
    updateMany?: Prisma.McqQuestionUpdateManyWithWhereWithoutContestInput | Prisma.McqQuestionUpdateManyWithWhereWithoutContestInput[];
    deleteMany?: Prisma.McqQuestionScalarWhereInput | Prisma.McqQuestionScalarWhereInput[];
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type McqQuestionCreateNestedOneWithoutMcqSubmissionsInput = {
    create?: Prisma.XOR<Prisma.McqQuestionCreateWithoutMcqSubmissionsInput, Prisma.McqQuestionUncheckedCreateWithoutMcqSubmissionsInput>;
    connectOrCreate?: Prisma.McqQuestionCreateOrConnectWithoutMcqSubmissionsInput;
    connect?: Prisma.McqQuestionWhereUniqueInput;
};
export type McqQuestionUpdateOneRequiredWithoutMcqSubmissionsNestedInput = {
    create?: Prisma.XOR<Prisma.McqQuestionCreateWithoutMcqSubmissionsInput, Prisma.McqQuestionUncheckedCreateWithoutMcqSubmissionsInput>;
    connectOrCreate?: Prisma.McqQuestionCreateOrConnectWithoutMcqSubmissionsInput;
    upsert?: Prisma.McqQuestionUpsertWithoutMcqSubmissionsInput;
    connect?: Prisma.McqQuestionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.McqQuestionUpdateToOneWithWhereWithoutMcqSubmissionsInput, Prisma.McqQuestionUpdateWithoutMcqSubmissionsInput>, Prisma.McqQuestionUncheckedUpdateWithoutMcqSubmissionsInput>;
};
export type McqQuestionCreateWithoutContestInput = {
    id?: string;
    questionText: string;
    options: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    correctOptionIndex: number;
    points?: number;
    createdAt?: Date | string;
    mcqSubmissions?: Prisma.McqSubmissionCreateNestedManyWithoutMcqQuestionInput;
};
export type McqQuestionUncheckedCreateWithoutContestInput = {
    id?: string;
    questionText: string;
    options: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    correctOptionIndex: number;
    points?: number;
    createdAt?: Date | string;
    mcqSubmissions?: Prisma.McqSubmissionUncheckedCreateNestedManyWithoutMcqQuestionInput;
};
export type McqQuestionCreateOrConnectWithoutContestInput = {
    where: Prisma.McqQuestionWhereUniqueInput;
    create: Prisma.XOR<Prisma.McqQuestionCreateWithoutContestInput, Prisma.McqQuestionUncheckedCreateWithoutContestInput>;
};
export type McqQuestionCreateManyContestInputEnvelope = {
    data: Prisma.McqQuestionCreateManyContestInput | Prisma.McqQuestionCreateManyContestInput[];
    skipDuplicates?: boolean;
};
export type McqQuestionUpsertWithWhereUniqueWithoutContestInput = {
    where: Prisma.McqQuestionWhereUniqueInput;
    update: Prisma.XOR<Prisma.McqQuestionUpdateWithoutContestInput, Prisma.McqQuestionUncheckedUpdateWithoutContestInput>;
    create: Prisma.XOR<Prisma.McqQuestionCreateWithoutContestInput, Prisma.McqQuestionUncheckedCreateWithoutContestInput>;
};
export type McqQuestionUpdateWithWhereUniqueWithoutContestInput = {
    where: Prisma.McqQuestionWhereUniqueInput;
    data: Prisma.XOR<Prisma.McqQuestionUpdateWithoutContestInput, Prisma.McqQuestionUncheckedUpdateWithoutContestInput>;
};
export type McqQuestionUpdateManyWithWhereWithoutContestInput = {
    where: Prisma.McqQuestionScalarWhereInput;
    data: Prisma.XOR<Prisma.McqQuestionUpdateManyMutationInput, Prisma.McqQuestionUncheckedUpdateManyWithoutContestInput>;
};
export type McqQuestionScalarWhereInput = {
    AND?: Prisma.McqQuestionScalarWhereInput | Prisma.McqQuestionScalarWhereInput[];
    OR?: Prisma.McqQuestionScalarWhereInput[];
    NOT?: Prisma.McqQuestionScalarWhereInput | Prisma.McqQuestionScalarWhereInput[];
    id?: Prisma.StringFilter<"McqQuestion"> | string;
    contestId?: Prisma.StringFilter<"McqQuestion"> | string;
    questionText?: Prisma.StringFilter<"McqQuestion"> | string;
    options?: Prisma.JsonFilter<"McqQuestion">;
    correctOptionIndex?: Prisma.IntFilter<"McqQuestion"> | number;
    points?: Prisma.IntFilter<"McqQuestion"> | number;
    createdAt?: Prisma.DateTimeFilter<"McqQuestion"> | Date | string;
};
export type McqQuestionCreateWithoutMcqSubmissionsInput = {
    id?: string;
    questionText: string;
    options: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    correctOptionIndex: number;
    points?: number;
    createdAt?: Date | string;
    contest: Prisma.ContestCreateNestedOneWithoutMcqQuestionsInput;
};
export type McqQuestionUncheckedCreateWithoutMcqSubmissionsInput = {
    id?: string;
    contestId: string;
    questionText: string;
    options: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    correctOptionIndex: number;
    points?: number;
    createdAt?: Date | string;
};
export type McqQuestionCreateOrConnectWithoutMcqSubmissionsInput = {
    where: Prisma.McqQuestionWhereUniqueInput;
    create: Prisma.XOR<Prisma.McqQuestionCreateWithoutMcqSubmissionsInput, Prisma.McqQuestionUncheckedCreateWithoutMcqSubmissionsInput>;
};
export type McqQuestionUpsertWithoutMcqSubmissionsInput = {
    update: Prisma.XOR<Prisma.McqQuestionUpdateWithoutMcqSubmissionsInput, Prisma.McqQuestionUncheckedUpdateWithoutMcqSubmissionsInput>;
    create: Prisma.XOR<Prisma.McqQuestionCreateWithoutMcqSubmissionsInput, Prisma.McqQuestionUncheckedCreateWithoutMcqSubmissionsInput>;
    where?: Prisma.McqQuestionWhereInput;
};
export type McqQuestionUpdateToOneWithWhereWithoutMcqSubmissionsInput = {
    where?: Prisma.McqQuestionWhereInput;
    data: Prisma.XOR<Prisma.McqQuestionUpdateWithoutMcqSubmissionsInput, Prisma.McqQuestionUncheckedUpdateWithoutMcqSubmissionsInput>;
};
export type McqQuestionUpdateWithoutMcqSubmissionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    questionText?: Prisma.StringFieldUpdateOperationsInput | string;
    options?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    correctOptionIndex?: Prisma.IntFieldUpdateOperationsInput | number;
    points?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    contest?: Prisma.ContestUpdateOneRequiredWithoutMcqQuestionsNestedInput;
};
export type McqQuestionUncheckedUpdateWithoutMcqSubmissionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    contestId?: Prisma.StringFieldUpdateOperationsInput | string;
    questionText?: Prisma.StringFieldUpdateOperationsInput | string;
    options?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    correctOptionIndex?: Prisma.IntFieldUpdateOperationsInput | number;
    points?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type McqQuestionCreateManyContestInput = {
    id?: string;
    questionText: string;
    options: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    correctOptionIndex: number;
    points?: number;
    createdAt?: Date | string;
};
export type McqQuestionUpdateWithoutContestInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    questionText?: Prisma.StringFieldUpdateOperationsInput | string;
    options?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    correctOptionIndex?: Prisma.IntFieldUpdateOperationsInput | number;
    points?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    mcqSubmissions?: Prisma.McqSubmissionUpdateManyWithoutMcqQuestionNestedInput;
};
export type McqQuestionUncheckedUpdateWithoutContestInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    questionText?: Prisma.StringFieldUpdateOperationsInput | string;
    options?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    correctOptionIndex?: Prisma.IntFieldUpdateOperationsInput | number;
    points?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    mcqSubmissions?: Prisma.McqSubmissionUncheckedUpdateManyWithoutMcqQuestionNestedInput;
};
export type McqQuestionUncheckedUpdateManyWithoutContestInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    questionText?: Prisma.StringFieldUpdateOperationsInput | string;
    options?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    correctOptionIndex?: Prisma.IntFieldUpdateOperationsInput | number;
    points?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type McqQuestionCountOutputType
 */
export type McqQuestionCountOutputType = {
    mcqSubmissions: number;
};
export type McqQuestionCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    mcqSubmissions?: boolean | McqQuestionCountOutputTypeCountMcqSubmissionsArgs;
};
/**
 * McqQuestionCountOutputType without action
 */
export type McqQuestionCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the McqQuestionCountOutputType
     */
    select?: Prisma.McqQuestionCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * McqQuestionCountOutputType without action
 */
export type McqQuestionCountOutputTypeCountMcqSubmissionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.McqSubmissionWhereInput;
};
export type McqQuestionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    contestId?: boolean;
    questionText?: boolean;
    options?: boolean;
    correctOptionIndex?: boolean;
    points?: boolean;
    createdAt?: boolean;
    contest?: boolean | Prisma.ContestDefaultArgs<ExtArgs>;
    mcqSubmissions?: boolean | Prisma.McqQuestion$mcqSubmissionsArgs<ExtArgs>;
    _count?: boolean | Prisma.McqQuestionCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["mcqQuestion"]>;
export type McqQuestionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    contestId?: boolean;
    questionText?: boolean;
    options?: boolean;
    correctOptionIndex?: boolean;
    points?: boolean;
    createdAt?: boolean;
    contest?: boolean | Prisma.ContestDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["mcqQuestion"]>;
export type McqQuestionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    contestId?: boolean;
    questionText?: boolean;
    options?: boolean;
    correctOptionIndex?: boolean;
    points?: boolean;
    createdAt?: boolean;
    contest?: boolean | Prisma.ContestDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["mcqQuestion"]>;
export type McqQuestionSelectScalar = {
    id?: boolean;
    contestId?: boolean;
    questionText?: boolean;
    options?: boolean;
    correctOptionIndex?: boolean;
    points?: boolean;
    createdAt?: boolean;
};
export type McqQuestionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "contestId" | "questionText" | "options" | "correctOptionIndex" | "points" | "createdAt", ExtArgs["result"]["mcqQuestion"]>;
export type McqQuestionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    contest?: boolean | Prisma.ContestDefaultArgs<ExtArgs>;
    mcqSubmissions?: boolean | Prisma.McqQuestion$mcqSubmissionsArgs<ExtArgs>;
    _count?: boolean | Prisma.McqQuestionCountOutputTypeDefaultArgs<ExtArgs>;
};
export type McqQuestionIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    contest?: boolean | Prisma.ContestDefaultArgs<ExtArgs>;
};
export type McqQuestionIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    contest?: boolean | Prisma.ContestDefaultArgs<ExtArgs>;
};
export type $McqQuestionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "McqQuestion";
    objects: {
        contest: Prisma.$ContestPayload<ExtArgs>;
        mcqSubmissions: Prisma.$McqSubmissionPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        contestId: string;
        questionText: string;
        options: runtime.JsonValue;
        correctOptionIndex: number;
        points: number;
        createdAt: Date;
    }, ExtArgs["result"]["mcqQuestion"]>;
    composites: {};
};
export type McqQuestionGetPayload<S extends boolean | null | undefined | McqQuestionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$McqQuestionPayload, S>;
export type McqQuestionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<McqQuestionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: McqQuestionCountAggregateInputType | true;
};
export interface McqQuestionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['McqQuestion'];
        meta: {
            name: 'McqQuestion';
        };
    };
    /**
     * Find zero or one McqQuestion that matches the filter.
     * @param {McqQuestionFindUniqueArgs} args - Arguments to find a McqQuestion
     * @example
     * // Get one McqQuestion
     * const mcqQuestion = await prisma.mcqQuestion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends McqQuestionFindUniqueArgs>(args: Prisma.SelectSubset<T, McqQuestionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__McqQuestionClient<runtime.Types.Result.GetResult<Prisma.$McqQuestionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one McqQuestion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {McqQuestionFindUniqueOrThrowArgs} args - Arguments to find a McqQuestion
     * @example
     * // Get one McqQuestion
     * const mcqQuestion = await prisma.mcqQuestion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends McqQuestionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, McqQuestionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__McqQuestionClient<runtime.Types.Result.GetResult<Prisma.$McqQuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first McqQuestion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {McqQuestionFindFirstArgs} args - Arguments to find a McqQuestion
     * @example
     * // Get one McqQuestion
     * const mcqQuestion = await prisma.mcqQuestion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends McqQuestionFindFirstArgs>(args?: Prisma.SelectSubset<T, McqQuestionFindFirstArgs<ExtArgs>>): Prisma.Prisma__McqQuestionClient<runtime.Types.Result.GetResult<Prisma.$McqQuestionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first McqQuestion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {McqQuestionFindFirstOrThrowArgs} args - Arguments to find a McqQuestion
     * @example
     * // Get one McqQuestion
     * const mcqQuestion = await prisma.mcqQuestion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends McqQuestionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, McqQuestionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__McqQuestionClient<runtime.Types.Result.GetResult<Prisma.$McqQuestionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more McqQuestions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {McqQuestionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all McqQuestions
     * const mcqQuestions = await prisma.mcqQuestion.findMany()
     *
     * // Get first 10 McqQuestions
     * const mcqQuestions = await prisma.mcqQuestion.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const mcqQuestionWithIdOnly = await prisma.mcqQuestion.findMany({ select: { id: true } })
     *
     */
    findMany<T extends McqQuestionFindManyArgs>(args?: Prisma.SelectSubset<T, McqQuestionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$McqQuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a McqQuestion.
     * @param {McqQuestionCreateArgs} args - Arguments to create a McqQuestion.
     * @example
     * // Create one McqQuestion
     * const McqQuestion = await prisma.mcqQuestion.create({
     *   data: {
     *     // ... data to create a McqQuestion
     *   }
     * })
     *
     */
    create<T extends McqQuestionCreateArgs>(args: Prisma.SelectSubset<T, McqQuestionCreateArgs<ExtArgs>>): Prisma.Prisma__McqQuestionClient<runtime.Types.Result.GetResult<Prisma.$McqQuestionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many McqQuestions.
     * @param {McqQuestionCreateManyArgs} args - Arguments to create many McqQuestions.
     * @example
     * // Create many McqQuestions
     * const mcqQuestion = await prisma.mcqQuestion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends McqQuestionCreateManyArgs>(args?: Prisma.SelectSubset<T, McqQuestionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many McqQuestions and returns the data saved in the database.
     * @param {McqQuestionCreateManyAndReturnArgs} args - Arguments to create many McqQuestions.
     * @example
     * // Create many McqQuestions
     * const mcqQuestion = await prisma.mcqQuestion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many McqQuestions and only return the `id`
     * const mcqQuestionWithIdOnly = await prisma.mcqQuestion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends McqQuestionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, McqQuestionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$McqQuestionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a McqQuestion.
     * @param {McqQuestionDeleteArgs} args - Arguments to delete one McqQuestion.
     * @example
     * // Delete one McqQuestion
     * const McqQuestion = await prisma.mcqQuestion.delete({
     *   where: {
     *     // ... filter to delete one McqQuestion
     *   }
     * })
     *
     */
    delete<T extends McqQuestionDeleteArgs>(args: Prisma.SelectSubset<T, McqQuestionDeleteArgs<ExtArgs>>): Prisma.Prisma__McqQuestionClient<runtime.Types.Result.GetResult<Prisma.$McqQuestionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one McqQuestion.
     * @param {McqQuestionUpdateArgs} args - Arguments to update one McqQuestion.
     * @example
     * // Update one McqQuestion
     * const mcqQuestion = await prisma.mcqQuestion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends McqQuestionUpdateArgs>(args: Prisma.SelectSubset<T, McqQuestionUpdateArgs<ExtArgs>>): Prisma.Prisma__McqQuestionClient<runtime.Types.Result.GetResult<Prisma.$McqQuestionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more McqQuestions.
     * @param {McqQuestionDeleteManyArgs} args - Arguments to filter McqQuestions to delete.
     * @example
     * // Delete a few McqQuestions
     * const { count } = await prisma.mcqQuestion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends McqQuestionDeleteManyArgs>(args?: Prisma.SelectSubset<T, McqQuestionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more McqQuestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {McqQuestionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many McqQuestions
     * const mcqQuestion = await prisma.mcqQuestion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends McqQuestionUpdateManyArgs>(args: Prisma.SelectSubset<T, McqQuestionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more McqQuestions and returns the data updated in the database.
     * @param {McqQuestionUpdateManyAndReturnArgs} args - Arguments to update many McqQuestions.
     * @example
     * // Update many McqQuestions
     * const mcqQuestion = await prisma.mcqQuestion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more McqQuestions and only return the `id`
     * const mcqQuestionWithIdOnly = await prisma.mcqQuestion.updateManyAndReturn({
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
    updateManyAndReturn<T extends McqQuestionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, McqQuestionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$McqQuestionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one McqQuestion.
     * @param {McqQuestionUpsertArgs} args - Arguments to update or create a McqQuestion.
     * @example
     * // Update or create a McqQuestion
     * const mcqQuestion = await prisma.mcqQuestion.upsert({
     *   create: {
     *     // ... data to create a McqQuestion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the McqQuestion we want to update
     *   }
     * })
     */
    upsert<T extends McqQuestionUpsertArgs>(args: Prisma.SelectSubset<T, McqQuestionUpsertArgs<ExtArgs>>): Prisma.Prisma__McqQuestionClient<runtime.Types.Result.GetResult<Prisma.$McqQuestionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of McqQuestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {McqQuestionCountArgs} args - Arguments to filter McqQuestions to count.
     * @example
     * // Count the number of McqQuestions
     * const count = await prisma.mcqQuestion.count({
     *   where: {
     *     // ... the filter for the McqQuestions we want to count
     *   }
     * })
    **/
    count<T extends McqQuestionCountArgs>(args?: Prisma.Subset<T, McqQuestionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], McqQuestionCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a McqQuestion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {McqQuestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends McqQuestionAggregateArgs>(args: Prisma.Subset<T, McqQuestionAggregateArgs>): Prisma.PrismaPromise<GetMcqQuestionAggregateType<T>>;
    /**
     * Group by McqQuestion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {McqQuestionGroupByArgs} args - Group by arguments.
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
    groupBy<T extends McqQuestionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: McqQuestionGroupByArgs['orderBy'];
    } : {
        orderBy?: McqQuestionGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, McqQuestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMcqQuestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the McqQuestion model
     */
    readonly fields: McqQuestionFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for McqQuestion.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__McqQuestionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    contest<T extends Prisma.ContestDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ContestDefaultArgs<ExtArgs>>): Prisma.Prisma__ContestClient<runtime.Types.Result.GetResult<Prisma.$ContestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    mcqSubmissions<T extends Prisma.McqQuestion$mcqSubmissionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.McqQuestion$mcqSubmissionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$McqSubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the McqQuestion model
 */
export interface McqQuestionFieldRefs {
    readonly id: Prisma.FieldRef<"McqQuestion", 'String'>;
    readonly contestId: Prisma.FieldRef<"McqQuestion", 'String'>;
    readonly questionText: Prisma.FieldRef<"McqQuestion", 'String'>;
    readonly options: Prisma.FieldRef<"McqQuestion", 'Json'>;
    readonly correctOptionIndex: Prisma.FieldRef<"McqQuestion", 'Int'>;
    readonly points: Prisma.FieldRef<"McqQuestion", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"McqQuestion", 'DateTime'>;
}
/**
 * McqQuestion findUnique
 */
export type McqQuestionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the McqQuestion
     */
    select?: Prisma.McqQuestionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the McqQuestion
     */
    omit?: Prisma.McqQuestionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.McqQuestionInclude<ExtArgs> | null;
    /**
     * Filter, which McqQuestion to fetch.
     */
    where: Prisma.McqQuestionWhereUniqueInput;
};
/**
 * McqQuestion findUniqueOrThrow
 */
export type McqQuestionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the McqQuestion
     */
    select?: Prisma.McqQuestionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the McqQuestion
     */
    omit?: Prisma.McqQuestionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.McqQuestionInclude<ExtArgs> | null;
    /**
     * Filter, which McqQuestion to fetch.
     */
    where: Prisma.McqQuestionWhereUniqueInput;
};
/**
 * McqQuestion findFirst
 */
export type McqQuestionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the McqQuestion
     */
    select?: Prisma.McqQuestionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the McqQuestion
     */
    omit?: Prisma.McqQuestionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.McqQuestionInclude<ExtArgs> | null;
    /**
     * Filter, which McqQuestion to fetch.
     */
    where?: Prisma.McqQuestionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of McqQuestions to fetch.
     */
    orderBy?: Prisma.McqQuestionOrderByWithRelationInput | Prisma.McqQuestionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for McqQuestions.
     */
    cursor?: Prisma.McqQuestionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` McqQuestions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` McqQuestions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of McqQuestions.
     */
    distinct?: Prisma.McqQuestionScalarFieldEnum | Prisma.McqQuestionScalarFieldEnum[];
};
/**
 * McqQuestion findFirstOrThrow
 */
export type McqQuestionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the McqQuestion
     */
    select?: Prisma.McqQuestionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the McqQuestion
     */
    omit?: Prisma.McqQuestionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.McqQuestionInclude<ExtArgs> | null;
    /**
     * Filter, which McqQuestion to fetch.
     */
    where?: Prisma.McqQuestionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of McqQuestions to fetch.
     */
    orderBy?: Prisma.McqQuestionOrderByWithRelationInput | Prisma.McqQuestionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for McqQuestions.
     */
    cursor?: Prisma.McqQuestionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` McqQuestions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` McqQuestions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of McqQuestions.
     */
    distinct?: Prisma.McqQuestionScalarFieldEnum | Prisma.McqQuestionScalarFieldEnum[];
};
/**
 * McqQuestion findMany
 */
export type McqQuestionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the McqQuestion
     */
    select?: Prisma.McqQuestionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the McqQuestion
     */
    omit?: Prisma.McqQuestionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.McqQuestionInclude<ExtArgs> | null;
    /**
     * Filter, which McqQuestions to fetch.
     */
    where?: Prisma.McqQuestionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of McqQuestions to fetch.
     */
    orderBy?: Prisma.McqQuestionOrderByWithRelationInput | Prisma.McqQuestionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing McqQuestions.
     */
    cursor?: Prisma.McqQuestionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` McqQuestions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` McqQuestions.
     */
    skip?: number;
    distinct?: Prisma.McqQuestionScalarFieldEnum | Prisma.McqQuestionScalarFieldEnum[];
};
/**
 * McqQuestion create
 */
export type McqQuestionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the McqQuestion
     */
    select?: Prisma.McqQuestionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the McqQuestion
     */
    omit?: Prisma.McqQuestionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.McqQuestionInclude<ExtArgs> | null;
    /**
     * The data needed to create a McqQuestion.
     */
    data: Prisma.XOR<Prisma.McqQuestionCreateInput, Prisma.McqQuestionUncheckedCreateInput>;
};
/**
 * McqQuestion createMany
 */
export type McqQuestionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many McqQuestions.
     */
    data: Prisma.McqQuestionCreateManyInput | Prisma.McqQuestionCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * McqQuestion createManyAndReturn
 */
export type McqQuestionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the McqQuestion
     */
    select?: Prisma.McqQuestionSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the McqQuestion
     */
    omit?: Prisma.McqQuestionOmit<ExtArgs> | null;
    /**
     * The data used to create many McqQuestions.
     */
    data: Prisma.McqQuestionCreateManyInput | Prisma.McqQuestionCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.McqQuestionIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * McqQuestion update
 */
export type McqQuestionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the McqQuestion
     */
    select?: Prisma.McqQuestionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the McqQuestion
     */
    omit?: Prisma.McqQuestionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.McqQuestionInclude<ExtArgs> | null;
    /**
     * The data needed to update a McqQuestion.
     */
    data: Prisma.XOR<Prisma.McqQuestionUpdateInput, Prisma.McqQuestionUncheckedUpdateInput>;
    /**
     * Choose, which McqQuestion to update.
     */
    where: Prisma.McqQuestionWhereUniqueInput;
};
/**
 * McqQuestion updateMany
 */
export type McqQuestionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update McqQuestions.
     */
    data: Prisma.XOR<Prisma.McqQuestionUpdateManyMutationInput, Prisma.McqQuestionUncheckedUpdateManyInput>;
    /**
     * Filter which McqQuestions to update
     */
    where?: Prisma.McqQuestionWhereInput;
    /**
     * Limit how many McqQuestions to update.
     */
    limit?: number;
};
/**
 * McqQuestion updateManyAndReturn
 */
export type McqQuestionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the McqQuestion
     */
    select?: Prisma.McqQuestionSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the McqQuestion
     */
    omit?: Prisma.McqQuestionOmit<ExtArgs> | null;
    /**
     * The data used to update McqQuestions.
     */
    data: Prisma.XOR<Prisma.McqQuestionUpdateManyMutationInput, Prisma.McqQuestionUncheckedUpdateManyInput>;
    /**
     * Filter which McqQuestions to update
     */
    where?: Prisma.McqQuestionWhereInput;
    /**
     * Limit how many McqQuestions to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.McqQuestionIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * McqQuestion upsert
 */
export type McqQuestionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the McqQuestion
     */
    select?: Prisma.McqQuestionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the McqQuestion
     */
    omit?: Prisma.McqQuestionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.McqQuestionInclude<ExtArgs> | null;
    /**
     * The filter to search for the McqQuestion to update in case it exists.
     */
    where: Prisma.McqQuestionWhereUniqueInput;
    /**
     * In case the McqQuestion found by the `where` argument doesn't exist, create a new McqQuestion with this data.
     */
    create: Prisma.XOR<Prisma.McqQuestionCreateInput, Prisma.McqQuestionUncheckedCreateInput>;
    /**
     * In case the McqQuestion was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.McqQuestionUpdateInput, Prisma.McqQuestionUncheckedUpdateInput>;
};
/**
 * McqQuestion delete
 */
export type McqQuestionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the McqQuestion
     */
    select?: Prisma.McqQuestionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the McqQuestion
     */
    omit?: Prisma.McqQuestionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.McqQuestionInclude<ExtArgs> | null;
    /**
     * Filter which McqQuestion to delete.
     */
    where: Prisma.McqQuestionWhereUniqueInput;
};
/**
 * McqQuestion deleteMany
 */
export type McqQuestionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which McqQuestions to delete
     */
    where?: Prisma.McqQuestionWhereInput;
    /**
     * Limit how many McqQuestions to delete.
     */
    limit?: number;
};
/**
 * McqQuestion.mcqSubmissions
 */
export type McqQuestion$mcqSubmissionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.McqSubmissionWhereInput;
    orderBy?: Prisma.McqSubmissionOrderByWithRelationInput | Prisma.McqSubmissionOrderByWithRelationInput[];
    cursor?: Prisma.McqSubmissionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.McqSubmissionScalarFieldEnum | Prisma.McqSubmissionScalarFieldEnum[];
};
/**
 * McqQuestion without action
 */
export type McqQuestionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the McqQuestion
     */
    select?: Prisma.McqQuestionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the McqQuestion
     */
    omit?: Prisma.McqQuestionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.McqQuestionInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=McqQuestion.d.ts.map