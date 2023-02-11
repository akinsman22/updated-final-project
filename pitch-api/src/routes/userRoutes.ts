import { Router } from "express";
import { getUser, registerUser, signUser } from "../controllers/userController";


const router = Router();

router.get('/', signUser);
router.post('/', registerUser);
router.post('/signin', signUser);
router.get('/:id', getUser );

export default router;