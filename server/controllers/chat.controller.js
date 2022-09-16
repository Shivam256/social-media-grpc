import Chat from "../models/chat.model.js"

export const createchat = async(call,callback)=>{
    const {user1,user2} = call.request;
        const doesExist = await Chat.findOne({user1,user2});
        console.log(doesExist)
        if(!doesExist){
            const newChat = new Chat({user1,user2});
            const chatAdded = await newChat.save();
            if(chatAdded) callback(null,{res:"Chat Created"})
            else callback(null,{res:"Error"})
        }else{
            callback(null,{res:"Chat Already Exists"})
        }
}

export const getMyChatList = async(call,callback)=>{
    const {myID} = call.request;
    const getChats = await Chat.find({$or:[{user1:myID},{user2:myID}]}).populate('user1 user2');
    const list = getChats.map((chat)=>{
        return{
           
                id:chat.user2._id.valueOf(),
                name:chat.user2.username
        }
    })
    // console.log(list)
    callback(null,{list})
}
