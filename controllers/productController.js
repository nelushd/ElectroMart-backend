import Products from "../models/product.js"; // make sure .js is included if using ES Modules
import { isItAdmin } from "./userController.js";

export function addProduct(req, res) {

    console.log(req.user)

    if(req.user == null){
        res.status(401).json({message : "Please login and try again"})
        return //to tell not to run the rest of the code 
    }
    if(req.user.role !== "admin"){
        res.status(403).json({message : "You are not authorized to perform this action "})
        return //to tell not to run the rest of the code 
    }
    const data = req.body;
    const newProduct = new Products(data);

    newProduct.save()
        .then(() => {
            res.json({ message: "Product added successfully" });
        })
        .catch((error) => {
            console.error(error);
            res.status(500).json({ error: "Product addition failed" });
        });
}
 
export async function getProduct(req,res) {
    
    try {

    if(isItAdmin(req)){
            const products = await Products.find()
             res.json(products);
       return;
        }else{
        const products = await Products.find
        ({availability : true});
        res.json(products);
        return;
    }
        
    } catch (e) {
        
            res.status(500).json({
                message : "Failed to get products"
             });
        
    }
}
export async function updateProduct(req,res) {
    
    try {

    if(isItAdmin(req)){
            const key = req.params.key;
            const data = req.body
            await Products.updateOne({key:key},data)

            res.json({
                message : "Product update successfully"
            })
            return;
    }else{
        res.status(403).json({
            message : "You are not authorized to perform this action"
             })
              return;
    }
        
    } catch (e) {
        
             res.status(500).json({
                message : "Failed to update products"
             });
     }
}
export async function deleteProduct(req,res) {
    
    try {

    if(isItAdmin(req)){
            const key = req.params.key;
            await Products.deleteOne({key:key})

            res.json({
                message : "Product deleted successfully"
            })
        
    }else{
        res.status(403).json({
            message : "You are not authorized to perform this action"
             })
              return;
    }
        
    } catch (e) {
        
             res.status(500).json({
                message : "Failed to delete products"
             });
     }
}
