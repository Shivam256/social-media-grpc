import React, { useCallback, useState } from "react";

import { useSnackbar } from "notistack";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

import { ChatServiceClient } from "../protos/chat_grpc_web_pb";
import { CreateChatRequest, CreateChatResponse ,ChatListRequest} from "../protos/chat_pb";

const chatClient = new ChatServiceClient(
  "http://localhost:9090",
  null,
  null
);

const useChat = () => {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const { user } = useAuth();

  const [chats,setChats] = useState();

  const startChat = useCallback((id) => {
    const data = new CreateChatRequest();
    data.setUser1(user.id);
    data.setUser2(id);
    chatClient.createchat(data,null,(err,res)=>{
        console.log(res)
    })
  }, []);

  const getChatList = useCallback((id)=>{
    const data = new ChatListRequest();
    data.setMyid(id);
    chatClient.getMyChatList(data,null,(err,res)=>{
      setChats(res.toObject().listList)
    })
  },[])

  return {
    startChat,
    getChatList,
    chats
  };
};

export default useChat;
