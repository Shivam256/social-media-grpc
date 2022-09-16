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

export const sendMessage = async(call,callback)=>{
    const {myID,friendID} = call.request;
    const {by,name,message,time} = call.request.message;

    const getChat = await Chat.findOne({
        $or: [
            { $ans: [{user1:myID}, {user2:friendID}] },
            { $ans: [{user2:friendID}, {user1:myID}] }
        ]
    })

    const oldMessages = getChat.messages
    oldMessages.push(
        {
            by:by.valueOf(),name,message,time
        }
    )

    const updateMessages = await Chat.findOneAndUpdate(
        {
            $or: [
                { $ans: [{user1:myID}, {user2:friendID}] },
                { $ans: [{user2:friendID}, {user1:myID}] }
            ]
        },{
            messages:oldMessages
        }

    )

    if(updateMessages) callback(null,{res:"Message Sent!"})
    else callback(null,{res:"Failed To Send Message"})

}

export const getChat = async(call,callback)=>{

    const {user1,user2} = call.request;

    console.log(user1,user2)
    const getChat = await Chat.findOne({
        $or: [
            { $ans: [{user1}, {user2}] },
            { $ans: [{user2}, {user1}] }
        ]
    })

    const chatArray = getChat.messages;
    // console.log(chatArray)
    for(const x of chatArray){
        call.write({msg:{
            by:x.by,
            name:x.name,
            message:x.message,
            time:x.time
        }})
    }

    call.end()

}
