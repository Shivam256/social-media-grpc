import React, { useCallback, useState } from "react";

import { useSnackbar } from "notistack";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";
import useUtils from "./useUtils";

import { FriendServiceClient } from "../protos/friend_grpc_web_pb";
import { AddFriendrequest } from "../protos/friend_pb";

const friendClient = new FriendServiceClient(
  "http://localhost:9090",
  null,
  null
);

const useFriend = () => {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const { user } = useAuth();
  const { handleError } = useUtils();

  const sendFriendRequest = useCallback((id) => {
    const frq = new AddFriendrequest();
    frq.setUserid(user.id).setTofriendid(id).setNote("");

    friendClient.addFriend(frq, null, (err, response) => {
      console.log(response, "add friend error");
      if (handleError(response)) {
        enqueueSnackbar("Friend request sent successfully!", {
          variant: "success",
        });
      }
    });
  }, []);

  const checkFriendship = useCallback((id) => {
    const fd = user.friends.findIndex((a) => a.id == fd);
    if (fd > 0) {
      return true;
    }
    return false;
  }, []);

  const checkIfRequested = useCallback((id)=>{
    
  })

  const getFriendRequests = useCallback(() => {}, []);

  const approveFriendRequest = useCallback(() => {}, []);

  const rejectFriendRequest = useCallback(() => {}, []);

  return {
    sendFriendRequest,
    getFriendRequests,
    approveFriendRequest,
    rejectFriendRequest,
    checkFriendship,
  };
};

export default useFriend;
