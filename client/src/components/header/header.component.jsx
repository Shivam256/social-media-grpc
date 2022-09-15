import { Box } from "@mui/material";
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";

import NotificationModal from "../notificationModal/notificationModal.component";

//styles
import { HeaderContainer } from "./header.styles";

const Header = () => {
  const { user, logout } = useAuth();
  const [showNotificationModal, setShowNotificationModal] = useState(false);

  const toggleNotificationModal = () => {
    setShowNotificationModal(!showNotificationModal);
  };

  return (
    <HeaderContainer>
      <Link to="/client/home">
        <div className="logo">Social 2.0</div>
      </Link>
      <div className="section-2">
        <Link to="/client/chat">
          <Icon icon="charm:messages" />
        </Link>
        <Link to="/client/explore">
          <Icon icon="carbon:explore" />
        </Link>
        <Icon icon="codicon:bell" onClick={toggleNotificationModal} />
        <Link to={`/client/profile/${user.id}`}>
          <Icon icon="iconoir:profile-circled" />
        </Link>
      </div>
      <NotificationModal
        state={showNotificationModal}
        toggleModal={toggleNotificationModal}
      />
    </HeaderContainer>
  );
};

export default Header;
