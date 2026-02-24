export const SuccessResponse = (data) => {
    return {
        success: true,
        data: data,
        error: null
    };
};
export const ErrorResponse = (error) => {
    return {
        success: false,
        data: null,
        error: error
    };
};
//# sourceMappingURL=ApiResponse.js.map