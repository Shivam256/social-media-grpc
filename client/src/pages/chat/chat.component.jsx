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
  const {startChat,getChatList,chats,sendMsg,getMsg,
    msgArr} = useChat()
  const [currentChat, setCurrentChat] = useState(null);
  const [msg,setMsg] = useState();
  const selectFriend = (friend) => {
    setCurrentChat(friend);
  };

  useEffect(() => {
    getChatList(user.id)
  }, [])

  // useEffect(() => {
      // if(currentChat!=null){
      // }
      // getMsg(user?.id,currentChat?.id)
  // }, [currentChat])
  

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
                getMsg(user?.id,friend?.id)
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
                <Box>

                {
                  msgArr?.map((msg)=>{
                    return(
                      <Box>
                        {msg.message}
                        </Box>
                      )
                    })
                  }
                  </Box>
              <InputSection>
                <ChatInput onChange={(e)=>setMsg(e.target.value)} />
                <button onClick={()=>{
                  sendMsg(currentChat.id,msg) 
                  getMsg(user?.id,currentChat?.id)
                }}>SEND</button>
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
