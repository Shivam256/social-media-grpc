import React, { useCallback, useState } from "react";

import { useSnackbar } from "notistack";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import useUtils from "./useUtils";
import useAuth from "./useAuth";

import { getUsersSuccess } from "../redux/slices/user";

//grpc
import { UserServiceClient } from "../protos/user_grpc_web_pb";
import { UserIdRequest, Empty } from "../protos/user_pb";

const userClient = new UserServiceClient("http://localhost:9090", null, null);

const useUser = () => {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const { users, pulled } = useSelector((state) => state.user);

  const [currentUserData, setCurrentUserData] = useState(null);
  const { user: auser } = useAuth();

  const { handleError } = useUtils();

  const getUserData = useCallback((id) => {
    const urq = new UserIdRequest();
    urq.setUserid(id);

    userClient.getUserInfo(urq, null, (err, response) => {
      console.log(response, "user id response");
      if (handleError(response)) {
        const user = response.getUser();
        console.log(user, "this is user response");
        console.log(user.getFriendsList(), "this is friends");
        const nuser = {
          id: user.getId(),
          email: user.getEmail(),
          username: user.getUsername(),
          friends: user.getFriendsList(),
          isAuthenticated: user.getId() === auser.id,
        };
        setCurrentUserData(nuser);
      }
    });
  }, []);

  const fetchUsers = useCallback(() => {
    const rq = new Empty();
    if (pulled) return;
    userClient.getUsers(rq, null, (err, response) => {
      console.log(response);
      if (handleError(response)) {
        const rusers = response.getUsersList();
        const nusers = rusers.map((u) => ({
          username: u.getUsername(),
          id: u.getId(),
        }));
        console.log(nusers);
        dispatch(getUsersSuccess(nusers));
      }
    });
  }, []);


  return {
    getUserData,
    fetchUsers,
    currentUserData,
    users,
  };
};

export default useUser;
