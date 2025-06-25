
import mongoose from 'mongoose';

const inquirySchema = new mongoose.Schema({
     id :{
        type : Number,
        require : true,
        unique : true
     },
        email :{
        type : String,
        require : true,
       
    },
    message :{
        type : String,
        require : true,
      
    },
    phone :{
        type : String,
        require : true,
       
    },
     date :{
        type : String,
        require : true,
     },
      response :{
        type : String,
        require : false,
        default : ""
     },
      isResolved :{
        type : Boolean,
        require : true,
        default : false
     }
     
})

const Inquiry = mongoose.model("Inquiry",inquirySchema);
export default Inquiry;