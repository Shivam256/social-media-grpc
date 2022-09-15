import React, { useEffect } from "react";
import { MyPage } from "../../globals/global.styles";
import { Avatar, Box, Typography } from "@mui/material";

import { useParams } from "react-router-dom";
import useUser from "../../hooks/useUser";
import useFriend from "../../hooks/useFriend";

import { ProfileContainer } from "./profile.styles";
import { Icon } from "@iconify/react";

const Profile = () => {
  const { userid } = useParams();
  const { getUserData, currentUserData } = useUser();
  const { sendFriendRequest } = useFriend();

  const handleGetProfleData = () => {
    getUserData(userid);
  };

  useEffect(() => {
    handleGetProfleData();
  }, []);

  const handleSendFriendRequest = () => {
    sendFriendRequest(userid);
  };

  return (
    <MyPage>
      {currentUserData !== null ? (
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <ProfileContainer>
            <Avatar sx={{ height: "100px", width: "100px" }} />
            <Box sx={{ width: "100%" }}>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "start",
                  justifyContent: "space-between",
                }}
              >
                <Box>
                  {" "}
                  <Typography sx={{ fontSize: "1.4em", fontWeight: 600 }}>
                    {currentUserData?.username}
                  </Typography>
                  <Typography sx={{ color: "#a4a4a4" }}>
                    {currentUserData?.email}
                  </Typography>
                </Box>
                {!currentUserData.isAuthenticated ? (
                  <Icon
                    icon={
                      currentUserData.isFriend
                        ? "material-symbols:handshake-outline"
                        : "akar-icons:person-add"
                    }
                    // icon="akar-icons:person-add"
                    className="addFriend-svg"
                    onClick={
                      currentUserData.isFriend
                        ? () => {}  
                        : handleSendFriendRequest
                    }
                  />
                ) : null}
              </Box>
              <Box className="stats-contanier">
                <Box className="stat">
                  <Typography className="stat-number">
                    {currentUserData?.friends?.length}
                  </Typography>
                  <Typography>Friends</Typography>
                </Box>
                <Box className="stat">
                  <Typography className="stat-number">0</Typography>
                  <Typography>Posts</Typography>
                </Box>
              </Box>
            </Box>
          </ProfileContainer>
        </Box>
      ) : null}
    </MyPage>
  );
};

export default Profile;
