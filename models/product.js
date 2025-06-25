import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
   key: {
    type: String,
    required: true,
    unique : true
  },
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true  
  },
   category: {
    type: String,
    required: true,
    default : "uncategorized"
  },

  dimension : {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
     },
 availability: {
    type: Boolean,
    required: true,
    default: true
  },
   image: {
    type: [String],
    required: true,
    default: ["https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg?w=768"]
      
  },
})

const Products = mongoose.model("Products", ProductSchema);

export default Products;
