import React, { useCallback, useState } from "react";

import { useSnackbar } from "notistack";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

import { ChatServiceClient } from "../protos/chat_grpc_web_pb";
import { CreateChatRequest, CreateChatResponse ,ChatListRequest,SendMessageRequest,Message,GetChatRequest} from "../protos/chat_pb";

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
  const [changed,setChanged] = useState();
  const [chats,setChats] = useState();

  const startChat = useCallback((id) => {
    const data = new CreateChatRequest();
    data.setUser1(user.id);
    data.setUser2(id);
    chatClient.createchat(data,null,(err,res)=>{
        console.log(res)
    })
    setChanged(!changed)
  }, []);

  const getChatList = useCallback((id)=>{
    const data = new ChatListRequest();
    data.setMyid(id);
    chatClient.getMyChatList(data,null,(err,res)=>{
      console.log(res.toObject().listList)
      setChats(res.toObject().listList)
    })
    setChanged(!changed)

  },[])

  const sendMsg = useCallback((id,message)=>{
    console.log(id)
    const date = new Date()
    const data = new SendMessageRequest()
    data.setFriendid(id);
    data.setMyid(user.id)
    const msg = new Message()
    msg.setBy(user.id)
    msg.setName(user.username)
    msg.setMessage(message)
    msg.setTime(date.toLocaleString())
    data.setMessage(msg)
    
    chatClient.sendMessage(data,null,(err,res)=>{
      console.log(res)
    })
    setChanged(!changed)


  },[])

  const [msgArr,setMsgArr] = useState([])
  const getMsg = useCallback((userID,friendID)=>{
    setMsgArr([])
    const data = new GetChatRequest();
    data.setUser1(userID);
    data.setUser2(friendID);
    const chatStream = chatClient.getChat(data,{});
    console.log(chatStream)
    chatStream.on("data", (response) => {
      console.log()
      setMsgArr(msgArr => [...msgArr, response.toObject().msg])
    });

    chatStream.on("status", function (status) {
      console.log(status.code, status.details, status.metadata);
    });

    chatStream.on("end", () => {
      console.log("Stream ended.");
    });


  },[])

  return {
    startChat,
    getChatList,
    chats,
    sendMsg,
    getMsg,
    msgArr,
    changed
  };
};

export default useChat;
