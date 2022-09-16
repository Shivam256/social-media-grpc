import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const chatSchema = new Schema({
  user1: {
    type: Schema.Types.ObjectId,
    ref:'USER',
    required: true,
  },
  user2:{
    type:Schema.Types.ObjectId,
    ref:'USER',
    required:true,
  },
  messages:[
    {
        by:{
            type:Schema.Types.ObjectId,
            ref:'USER',
            required:true
        },
        name:{
            type:String,
            required:true,
        },
        message:{
            type:String,
            required:true,
        },
        time:{
          type:String,
          required:true
        }
    }
  ]
});

const Chat = mongoose.model('CHAT', chatSchema);

export default Chat;
