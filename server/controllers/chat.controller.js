import Chat from "../models/chat.model.js"

export const createchat = async(call,callback)=>{
    const {user1,user2} = call.request;
        const doesExist = await Chat.findOne({$or:[{user1,user2},{user1:user2,user2:user1}]});
        // console.log(doesExist)
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
    console.log(myID)
    const getChats = await Chat.find({$or:[{user1:myID},{user2:myID}]}).populate('user1 user2');
    const list = getChats.map((chat)=>{
        return{
           
                id:chat.user1._id.valueOf()===myID?chat.user2._id.valueOf():chat.user1._id.valueOf(),
                name:chat.user1._id.valueOf()===myID?chat.user2.username:chat.user1.username
        }
    })
    // console.log(getChats)
    callback(null,{list})
}

export const sendMessage = async(call,callback)=>{
    const {myID,friendID} = call.request;
    const {by,name,message,time} = call.request.message;
    console.log(myID,friendID)
    const getChat = await Chat.findOne({
        $or: [
            { $and: [{user1:myID}, {user2:friendID}] },
            { $and: [{user1:friendID},{user2:myID}] }
        ]
    })


    let oldMessages = getChat.messages
    oldMessages.push(
                {
                    by:by.valueOf(),name,message,time
                })

    console.log(oldMessages)
   

    const updateMessages = await Chat.findByIdAndUpdate(
        getChat._id,{
            messages:oldMessages
        }

    )

    console.log(updateMessages)

    if(updateMessages) callback(null,{res:"Message Sent!"})
    else callback(null,{res:"Failed To Send Message"})

}

export const getChat = async(call,callback)=>{

    const {user1,user2} = call.request;

    // console.log(user1,user2)
    const getChat = await Chat.findOne({
        $or: [
            { $and: [{user1}, {user2}] },
            { $and: [{user1:user2}, {user2:user1}] }
        ]
    })
    // console.log("HERE",getChat)
    const chatArray = getChat?.messages;
    // console.log(chatArray)
    if(chatArray){
        for(const x of chatArray){
            call.write({msg:{
                by:x.by,
                name:x.name,
                message:x.message,
                time:x.time
            }})
        }
    
        call.end()
    }else{
        call.end()
    }
   

}
