import express from "express";
import { addReview, approveReview, getReview } from "../controllers/reviewController.js";


const reviewRouter = express.Router();
reviewRouter.post("/",addReview)
reviewRouter.get("/",getReview)
reviewRouter.put("/approve/:email", approveReview)

export default reviewRouter;