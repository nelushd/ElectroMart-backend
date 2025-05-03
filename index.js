import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import userRouter from "./routes/userRoutes.js";
import productRouter from "./routes/productRouter.js";
import jwt from "jsonwebtoken";

let app = express();
app.use(bodyParser.json());
app.use((req,res,next)=>{

    let token = req.header
    ("Authorization")

    if(token!=null){
        token=token.replace("Bearer ","")

        jwt.verify(token,"cs-secret-8901",
            (err, decoded) => {
                if(!err){
                    req.user = decoded;
                }
            }
        );
        
    }
   
    
    next()
})

let mongoUrl = "mongodb+srv://nelushid:123@cluster0.7thjeww.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(mongoUrl)

let connection = mongoose.connection

connection.once("open",()=>{
    console.log("MangoDB connection established successfully")
})

app.use("/api/users",userRouter)
app.use("/api/products",productRouter)

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
