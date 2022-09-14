import React from "react";

import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate()
  const { logout } = useAuth();
  return (
    <div>
      <h1>home</h1>
      <button onClick={()=>navigate('/postSection')}>
      Go To Post Section
      </button>
      <button onClick={logout}>logout</button>
    </div>
  );
};

export default Home;
