import express from "express";
import { getProduct, addProduct,updateProduct,deleteProduct } from "../controllers/productController.js";


const productRouter = express.Router();

productRouter.post("/", addProduct);
productRouter.get("/", getProduct);
productRouter.put("/:key", updateProduct);
productRouter.delete("/:key", deleteProduct);
export default productRouter;
