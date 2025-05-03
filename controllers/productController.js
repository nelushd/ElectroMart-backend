import Product from "../models/product.js"; // make sure .js is included if using ES Modules

export function addProduct(req, res) {

    console.log(req.user)

    if(req.user == null){
        res.status(401).jason({message : "Please login and try again"})
        return //to tell not to run the rest of the code 
    }
    if(req.user.role == "admin"){
        res.status(403).jason({message : "You are not authorized to perform this action "})
        return //to tell not to run the rest of the code 
    }
    const data = req.body;
    const newProduct = new Product(data);

    newProduct.save()
        .then(() => {
            res.json({ message: "Product added successfully" });
        })
        .catch((error) => {
            console.error(error);
            res.status(500).json({ error: "Product addition failed" });
        });
}
