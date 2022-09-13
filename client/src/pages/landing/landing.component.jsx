import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      <Link to="/signup">signup</Link>
      <br />
      <Link to="/login">login</Link>
    </div>
  );
};

export default Landing;
