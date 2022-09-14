import React, { useCallback, useState } from "react";

import { useSnackbar } from "notistack";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const useFriend = () => {
  const sendFriendRequest = useCallback(() => {}, []);

  const getFriendRequests = useCallback(() => {}, []);

  const approveFriendRequest = useCallback(() => {}, []);

  const rejectFriendRequest = useCallback(() => {}, []);

  return {
    sendFriendRequest,
    getFriendRequests,
    approveFriendRequest,
    rejectFriendRequest,
  };
};

export default useFriend;
