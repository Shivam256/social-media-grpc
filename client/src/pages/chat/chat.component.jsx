import { Avatar, Box, Typography } from "@mui/material";
import React from "react";

import { MyPage } from "../../globals/global.styles";
import {
  ChatContainer,
  ChatSidebar,
  ChatScreen,
  UserOverview,
} from "./chat.styles";

const Chat = () => {
  return (
    <MyPage>
      <ChatContainer>
        <ChatSidebar>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              padding: "10px",
              backgroundColor: "#dfdfdf",
              borderRadius: "5px",
              marginBottom:'20px'
            }}
          >
            <Avatar />
            <Typography>Shivam Gavandi</Typography>
          </Box>
          <UserOverview>
            <Avatar />
            <Box>
              <Typography>Shivam Gavandi</Typography>
              <Typography>this is the last message</Typography>
            </Box>
          </UserOverview>
        </ChatSidebar>
        <ChatScreen>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              padding: "10px",
              backgroundColor: "#dfdfdf",
              borderRadius: "5px",
            }}
          >
            <Avatar />
            <Typography>Shivam Gavandi</Typography>
          </Box>
        </ChatScreen>
      </ChatContainer>
    </MyPage>
  );
};

export default Chat;
