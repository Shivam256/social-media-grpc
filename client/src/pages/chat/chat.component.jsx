import { Avatar, Box, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

import { MyPage } from "../../globals/global.styles";
import {
  ChatContainer,
  ChatSidebar,
  ChatScreen,
  UserOverview,
  ChatInput,
  InputSection,
} from "./chat.styles";
import useAuth from "../../hooks/useAuth";

const Chat = () => {
  const { user } = useAuth();
  const [currentChat, setCurrentChat] = useState(null);

  const selectFriend = (friend) => {
    setCurrentChat(friend);
  };

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
              marginBottom: "20px",
            }}
          >
            <Avatar />
            <Typography>Shivam Gavandi</Typography>
          </Box>
          {user.friends.map((friend) => (
            <UserOverview
              onClick={() => {
                selectFriend(friend);
              }}
              selected={currentChat != null && friend.id == currentChat.id}
            >
              <Avatar />
              <Box>
                <Typography>{friend.username}</Typography>
                <Typography>this is the last message</Typography>
              </Box>
            </UserOverview>
          ))}
        </ChatSidebar>
        <ChatScreen>
          {currentChat ? (
            <Box
              sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
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
                <Typography>{currentChat.username}</Typography>
              </Box>
              <InputSection>
                <ChatInput />
              </InputSection>
            </Box>
          ) : (
            <Box>HERE WILL BE THE CHAT SECTION</Box>
          )}
        </ChatScreen>
      </ChatContainer>
    </MyPage>
  );
};

export default Chat;
