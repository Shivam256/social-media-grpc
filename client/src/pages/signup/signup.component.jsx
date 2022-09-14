import React, { useState,useEffect } from "react";

//libs
import { Typography, Box, TextField } from "@mui/material";
import { useSnackbar } from "notistack";

//hooks
import useAuth from "../../hooks/useAuth";
import {useNavigate} from 'react-router-dom';

//styles
import {
  MyPage,
  CustomButton,
  CustomTextField,
} from "../../globals/global.styles";

const SignUp = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { enqueueSnackbar } = useSnackbar();

  const { signup,isLoggedIn } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    console.log(data);
    if (data.password != data.confirmPassword) {
      enqueueSnackbar("Passwords must match.", { variant: "info" });
      return;
    }
    signup(data);
  };

  useEffect(()=>{
    if(isLoggedIn){
      navigate('/client/home')
    }
  },[isLoggedIn])

  return (
    <MyPage>
      <Box
        sx={{
          width: "60vw",
          margin: "30px auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{ fontSize: "1.8em", fontWeight: "600", marginBottom: "30px" }}
        >
          Sign up and become a part of our community !
        </Typography>
        <form onSubmit={handleSignup} style={{ width: "100%" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "60%",
              margin: "10px auto",
              gap: "20px",
              padding: "40px",
              borderRadius: "10px",
              boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
              alignItems: "center",
            }}
          >
            <CustomTextField
              label="Email"
              onChange={handleChange}
              name="email"
              value={data.email}
            />
            <CustomTextField
              label="Username"
              onChange={handleChange}
              name="username"
              value={data.username}
            />
            <CustomTextField
              label="Password"
              onChange={handleChange}
              name="password"
              value={data.password}
            />
            <CustomTextField
              label="Confirm Password"
              onChange={handleChange}
              name="confirmPassword"
              value={data.confirmPassword}
            />
            <CustomButton type="submit">SIGN UP</CustomButton>
          </Box>
        </form>
      </Box>
    </MyPage>
  );
};

export default SignUp;
