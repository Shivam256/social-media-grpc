import React from "react";
import { useSnackbar } from "notistack";

const useUtils = () => {
  const { enqueueSnackbar } = useSnackbar();

  const handleError = (response) => {
    const error = response.getError();
    const message = response.getMessage();

    if (error == null || error == 0) return true;

    if (error != null || error > 0) {
      enqueueSnackbar(message, { variant: "error" });
      return false;
    }
    return true;
  };

  return {
    handleError,
  };
};

export default useUtils;
