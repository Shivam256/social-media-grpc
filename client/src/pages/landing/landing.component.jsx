import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/client/home");
    }
  }, [isLoggedIn]);
  return (
    <div>
      <Link to="/signup">signup</Link>
      <br />
      <Link to="/login">login</Link>
      <br />
      <Link to="/postSection"> My Feed </Link>
    </div>
  );
};

export default Landing;
