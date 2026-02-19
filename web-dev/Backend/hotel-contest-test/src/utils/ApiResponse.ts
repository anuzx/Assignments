export const SuccessResponse = <T>(data : T)=>{
    return {
        success: true as const, 
        data,
        error:null
  }
}

export const ErrorResponse = (err: string) => {
    return {
        success: false as const,
        data: null,
        error :err
    }
}

class ApiError extends Error {
  statusCode: number;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
  }
}

export {ApiError}
