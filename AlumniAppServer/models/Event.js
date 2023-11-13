import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const eventSchema = new Schema({
    title: String,
    content: String,
    eventDate: String,
    eventTime: String,
    choice:String,
    userID: String,
    status: String,
    imagePath: String,
  },{
    timestamps:true
  }
  );
  
  const Event = model('Event', eventSchema);
  export default Event;