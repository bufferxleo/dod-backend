import { Router } from "express";
import { signup,login, editPassword, editUrl, editDomain, searchDomain } from "../controllers/user.controller.js";

const router=Router();
router.post("/signup",signup);
router.post("/login",login)
router.post("/editPass",editPassword)
router.post("/editUrl",editUrl)
router.post("/editDomain",editDomain)
router.post("/searchDomain",searchDomain)

export default router;