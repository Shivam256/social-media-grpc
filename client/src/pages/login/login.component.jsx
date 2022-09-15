import React, { useState, useEffect } from 'react';

//libs
import { Typography, Box, TextField } from '@mui/material';
import { useSnackbar } from 'notistack';

//hooks
import useAuth from '../../hooks/useAuth';

import { useNavigate } from 'react-router-dom';

//styles
import {
  MyPage,
  CustomButton,
  CustomTextField,
} from '../../globals/global.styles';

const Login = () => {
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const { enqueueSnackbar } = useSnackbar();

  const { login, isLoggedIn } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(data);
    login(data);
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/client/home');
    }
  }, [isLoggedIn]);

  return (
    <MyPage>
      <Box
        sx={{
          width: '60vw',
          margin: '30px auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography
          sx={{ fontSize: '1.8em', fontWeight: '600', marginBottom: '30px' }}
        >
          Welcome Back!
        </Typography>
        <form onSubmit={handleLogin} style={{ width: '100%' }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: '60%',
              margin: '10px auto',
              gap: '20px',
              padding: '40px',
              borderRadius: '10px',
              boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
              alignItems: 'center',
            }}
          >
            <CustomTextField
              label="Email"
              onChange={handleChange}
              name="email"
              value={data.email}
            />
            <CustomTextField
              label="Password"
              onChange={handleChange}
              name="password"
              value={data.password}
            />
            <CustomButton type="submit">LOGIN</CustomButton>
          </Box>
        </form>
      </Box>
    </MyPage>
  );
};

export default Login;
