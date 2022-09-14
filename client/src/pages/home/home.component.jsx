import React from "react";

import useAuth from "../../hooks/useAuth";

const Home = () => {
  const { logout } = useAuth();
  return (
    <div>
      <h1>home</h1>
      <button onClick={logout}>logout</button>
    </div>
  );
};

export default Home;
