import Inquiry from "../models/inquiry.js";
import { isItCustomer } from "./userController.js"

export async function addInquiry(req,res) {
 try {
    
    if (isItCustomer(req)){
     
        const data = req.body
        data.email = req.user.email
        data.phone = req.user.phone

        let id = 0;

        const inquiries = await Inquiry.find
        ().sort({id:-1}).limit(1);

        if(inquiries.length == 0){
            id = 1;
        }else{
            id = inquiries[0].id+1;
        }
        data.id = id;

        const newInquiry = new Inquiry(data);
        const response = await newInquiry.save();

        res.json({
            message : "Inquiry added successfully",id : response.id
        })
     }
} catch (e) {
     console.error("❌ Error in addInquiry:", e);
    res.status(500).json({
        message : "Failed to add inquiry"
    })
    
 }   

}
export async function getInquiry(req,res) {
 try {
    
    if (isItCustomer(req)){
       
        const inquiries = await Inquiry.find({email:req.user.email});
        res.json(inquiries)
        return;      
     }else if (isItAdmin(req)){
         const inquiries = await Inquiry.find();
         return;
     }else{
        res.status(403).json({
            message: "you are not authorizd to perform this action"
        })
         return;
     }
} catch (e) {
    
    res.status(500).json({
        message : "Failed get inquiries"
    })
    
 }   

}
export async function deleteInquiry(req,res) {
 try {
    
    if (isItAdmin(req)){
       
        const id = req.params.id;

        await Inquiry.deleteOne({id:id})
        res.json({
            message: "Inquiry deleted sucessfully"
        })
        return;      
     }else if (isItCustomer(req)){
         const id = req.params.id;

         const inquiry = await Inquiry.findOne({id:id});
         if (inquiry == null){
            res.status(404).json({
                message : "Inquiry not found"
            })
            return
         }
     
     }else{
        res.status(403).json({
            message: "you are not authorizd to perform this action"
        })
         return;
     }
} catch (e) {
    
    res.status(500).json({
        message : "Failed get inquiries"
    })
    
 }   

}
export async function updateInquiry(req,res) {
 try {
    
    if (isItAdmin(req)){
       
        const id = req.params.id;
        const data =req.body;

        await Inquiry.updateOne({id:id},data)
        res.json({
            message: "Inquiry updated sucessfully"
        })
        return;      
     }else if (isItCustomer(req)){
         const id = req.params.id;
         const data =req.body;

         const inquiry = await Inquiry.findOne({id:id},{message : data.message});
         if (inquiry == null){
            res.status(404).json({
                message : "Inquiry not found"
            })
            return
         }else{
            res.status(403).json({
                message : "Inquiry updated successfully"
            })
            return;
         }
     
     }else{
        res.status(403).json({
            message: "you are not authorizd to perform this action"
        })
         return;
     }
} catch (e) {
    
    res.status(500).json({
        message : "Failed get inquiries"
    })
    
 }   

}