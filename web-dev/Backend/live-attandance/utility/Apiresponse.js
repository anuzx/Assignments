export const ErrorResponse = (error) => {
  return {
    success: false,
    error: error,
  };
};

export const SuccessResponse = (data) => {
  return {
    success: true,
    data: data,
  };
};