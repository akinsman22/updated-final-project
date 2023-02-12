import { Router } from "express";
import { allUsers, getUser, registerUser, signUser } from "../controllers/userController";


const router = Router();

router.get('/', allUsers);
router.post('/', registerUser);
router.post('/signin', signUser);
router.get('/:id', getUser );

export default router;