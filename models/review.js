import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
    email :{
        type : String,
        required : true,
        unique: true

    },
    name : {
        type : String,
        required : true
    },
    rating : {
        type : String,
        required : true
    },
    comment : {
        type : String,
        required : true
    },
    date : {
        type : Date,
        required : true,
        default : Date.now()
    },
    isApproved : {
        type : Boolean,
        required : true,
        default : false
    },
    profilePicture : {
        type: String,
        required: false,
        default : "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg?w=768"
    }
})

const Review = mongoose.model("Review",reviewSchema);
export default Review;