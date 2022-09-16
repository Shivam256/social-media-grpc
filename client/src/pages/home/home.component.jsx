import React from "react";

import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import Post from '../post/post.component'
import {MyPage} from '../../globals/global.styles';

const Home = () => {
  const navigate = useNavigate()
  const { logout } = useAuth();
  return (
    <MyPage>
      

    <Post/>

    </MyPage>
  );
};

export default Home;
