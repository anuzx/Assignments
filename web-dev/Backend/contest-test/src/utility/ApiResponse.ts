export const SuccessResponse = <T>(data:T) => {
    return {
        success: true as const,
        data: data,
        error: null
    }
}


export const ErrorResponse = (error: string) => {
    return {
        success: false,
        data: null,
        error:error
    }
}