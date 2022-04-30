import userControllers from "../controllers/userControllers";
import express from "express";

const router = express.Router();

router.post('/', userControllers.register);



export default router;

