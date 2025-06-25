import express from "express";
import { addInquiry,getInquiry,deleteInquiry, updateInquiry } from "../controllers/inquiryController.js";

const inquiryRouter = express.Router();

inquiryRouter.post("/",addInquiry)
inquiryRouter.get("/",getInquiry)
inquiryRouter.delete("/:id",deleteInquiry)
inquiryRouter.delete("/:id",updateInquiry)


export default inquiryRouter;