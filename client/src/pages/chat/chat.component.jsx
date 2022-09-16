import { Avatar, Box, TextField, Typography } from "@mui/material";
import React, { useState ,useEffect} from "react";

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
import useChat from '../../hooks/useChat'

const Chat = () => {
  const { user } = useAuth();
  const {startChat,getChatList,chats} = useChat()
  const [currentChat, setCurrentChat] = useState(null);
  console.log(user,"CHAT IN USEr")
  const selectFriend = (friend) => {
    setCurrentChat(friend);
  };

  useEffect(() => {
    getChatList(user.id)
  }, [])
  

  return (
    <MyPage>
      <ChatContainer>
        <ChatSidebar>
          <Box
          onClick={()=>setCurrentChat(null)}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              padding: "10px",
              backgroundColor: "#dfdfdf",
              borderRadius: "5px",
              marginBottom: "20px",
              "cursor":"pointer"
            }}
          >
            <Avatar />
            <Typography>{user.username}</Typography>
          </Box>
          <Typography>Chats</Typography>

          {chats?.map((friend) => (
            <UserOverview
              onClick={() => {
                selectFriend(friend);
              }}
              selected={currentChat != null && friend.id == currentChat.id}
            >
              <Avatar />
              <Box>
                <Typography>{friend.name}</Typography>
                {/* <Typography>Previous Message</Typography> */}
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
                <Typography>{currentChat.name}</Typography>
              </Box>
              <InputSection>
                <ChatInput />
                <button >SEND</button>
              </InputSection>
            </Box>
          ) : (
            <Box>

              <Typography textAlign={"center"} fontSize={"30px"} fontWeight="bold" marginTop={"1rem"}>Start a chat with</Typography>

              {
                user.friends.map((friend)=>{
                  return(
                    <Box  onClick={()=>startChat(friend.id)} sx={{"cursor":"pointer","m":2,"backgroundColor":"#dfdfdf","textAlign":"center","width":"20%","borderRadius":"5px","padding":"10px"}}>
                    {friend.username}
                    </Box>
                  )
                })
              }

            </Box>
          )}
        </ChatScreen>
      </ChatContainer>
    </MyPage>
  );
};

export default Chat;
