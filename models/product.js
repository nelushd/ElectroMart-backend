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
    default: ["https://www.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-600nw-1037719192.jpg"]
      
  },
})

const Products = mongoose.model("Products", ProductSchema);

export default Products;
