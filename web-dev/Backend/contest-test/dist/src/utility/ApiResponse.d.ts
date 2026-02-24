export declare const SuccessResponse: <T>(data: T) => {
    success: true;
    data: T;
    error: null;
};
export declare const ErrorResponse: (error: string) => {
    success: boolean;
    data: null;
    error: string;
};
//# sourceMappingURL=ApiResponse.d.ts.map