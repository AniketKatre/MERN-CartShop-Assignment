import express from "express";
const router = express.Router();
import {
  authUser,
  registerUser,
  logoutUser,
} from "../controllers/userController.js";

router.route("/").post(registerUser);
router.post("/logout", logoutUser);
router.post("/auth", authUser);

export default router;
