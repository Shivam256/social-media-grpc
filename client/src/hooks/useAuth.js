import React, { useCallback } from "react";

import {
  SignUpRequest,
  LoginRequest,
  InitializeRequest,
} from "../protos/auth_pb";
import { AuthServiceClient } from "../protos/auth_grpc_web_pb";

//redux
import {
  loginSuccess,
  initialize,
  logoutSuccess,
  registerSuccess,
} from "../redux/slices/auth";
import useUtils from "./useUtils";

import { useSnackbar } from "notistack";
import { useSelector, useDispatch } from "react-redux";
import { isValidToken, setSession } from "../utils/jwt";
import { useNavigate } from "react-router-dom";

const authclient = new AuthServiceClient("http://localhost:9090", null, null);

const useAuth = () => {
  const { isLoggedIn, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const { handleError, tokenise } = useUtils();

  const signup = useCallback((data) => {
    const srq = new SignUpRequest();
    srq
      .setUsername(data.username)
      .setEmail(data.email)
      .setPassword(data.password);

    authclient.signup(srq, null, (err, response) => {
      console.log(response, "signup response");
      const token = response.getToken();
      const error = response.getError();
      const message = response.getMessage();
      const user = response.getUser();

      console.log(user, "this is user");

      if (error != null && error > 0) {
        enqueueSnackbar(message, { variant: "error" });
        return;
      } else {
        const frds = user.getFriendsList();
        const friends = frds.map((f) => ({
          email: user.getEmail(),
          username: user.getUsername(),
          id: user.getId(),
        }));

        const nuser = {
          email: user.getEmail(),
          username: user.getUsername(),
          id: user.getId(),
          friends,
        };
        console.log(token, "token");
        setSession(token);
        dispatch(registerSuccess({ user: nuser }));
        navigate("/client/home");
      }
    });
  }, []);

  const login = useCallback((data) => {
    const lrq = new LoginRequest();
    lrq.setEmail(data.email).setPassword(data.password);

    authclient.login(lrq, null, (err, response) => {
      console.log(response, "login response");
      const token = response.getToken();
      const error = response.getError();
      const message = response.getMessage();
      const user = response.getUser();

      console.log(user, "this is user");

      if (error != null && error > 0) {
        enqueueSnackbar(message, { variant: "error" });
        return;
      } else {
        const frds = user.getFriendsList();
        const friends = frds.map((f) => ({
          email: f.getEmail(),
          username: f.getUsername(),
          id: f.getId(),
        }));

        const nuser = {
          email: user.getEmail(),
          username: user.getUsername(),
          id: user.getId(),
          friends,
        };
        console.log(token, "token");
        setSession(token);
        dispatch(loginSuccess({ user: nuser }));
        navigate("/client/home");
      }
    });
  }, []);

  const initializeAuth = useCallback(() => {
    const irq = new InitializeRequest();

    authclient.initialize(tokenise(irq), null, (err, response) => {
      console.log(response, "initialize response");
      const error = response.getError();
      const message = response.getMessage();
      if (error == null || error == 0) {
        console.log("i am hereerere");
        const user = response.getUser();
        const frds = user.getFriendsList();
        const friends = frds.map((f) => ({
          email: f.getEmail(),
          username: f.getUsername(),
          id: f.getId(),
        }));
        const nuser = {
          email: user.getEmail(),
          username: user.getUsername(),
          id: user.getId(),
          friends,
        };
        dispatch(
          initialize({
            user: nuser,
            isLoggedIn: true,
          })
        );
      } else {
        dispatch(
          initialize({
            user: null,
            isLoggedIn: false,
          })
        );
      }
    });
  });

  const logout = useCallback(async () => {
    setSession(null);
    dispatch(logoutSuccess());
    navigate("/");
  }, []);

  return {
    signup,
    login,
    initializeAuth,
    isLoggedIn,
    user,
    logout,
  };
};

export default useAuth;
