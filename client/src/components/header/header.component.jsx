import { Box } from "@mui/material";
import React from "react";
import { Icon } from "@iconify/react";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";

//styles
import { HeaderContainer } from "./header.styles";

const Header = () => {
  const { user, logout } = useAuth();
  return (
    <HeaderContainer>
      <div className="logo">Social 2.0</div>
      <div className="section-2">
        <Link to="/client/explore">
          <Icon icon="carbon:explore" />
        </Link>
        <Icon icon="codicon:bell" />
        <Link to={`/client/profile/${user.id}`}>
          <Icon icon="iconoir:profile-circled" />
        </Link>
      </div>
    </HeaderContainer>
  );
};

export default Header;
