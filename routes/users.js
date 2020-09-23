import express from "express";
import { createUser, getUsers,deleteUsers,patchUsers,getUser} from "../controllers/users.js";
const router = express.Router();




router.get("/",getUser );
// send data to database
router.post("/", createUser);
router.get("/:id",getUsers );
router.delete("/:id",deleteUsers );
router.patch("/:id", patchUsers);


export default router;
