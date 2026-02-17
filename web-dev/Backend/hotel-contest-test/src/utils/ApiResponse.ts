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