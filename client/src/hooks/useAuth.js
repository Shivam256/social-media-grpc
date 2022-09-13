import React, { useCallback } from "react";

import { SignUpRequest, LoginRequest } from "../protos/auth_pb";
import { AuthServiceClient } from "../protos/auth_grpc_web_pb";

const authclient = new AuthServiceClient("http://localhost:9090", null, null);

const useAuth = () => {
  const signup = useCallback((data) => {
    const srq = new SignUpRequest();
    srq
      .setUsername(data.username)
      .setEmail(data.email)
      .setPassword(data.password);

    authclient.signup(srq, null, (err, response) => {
      console.log(response, "signup response");
    });
  }, []);

  
  const login = useCallback((data) => {
    const lrq = new LoginRequest();
    lrq.setEmail(data.email).setPassword(data.password);

    authclient.login(lrq, null, (err, response) => {
      console.log(response, "login response");
    });
  }, []);

  return {
    signup,
    login
  };
};

export default useAuth;
