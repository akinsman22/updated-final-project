import { Router } from "express";
import {
  allPitches,
  deletePitch,
  getPitchById,
  updatePitch,
  makePitch,
} from "../controllers/pitchController";

const router = Router();

router.get("/", allPitches);

router.post("/", makePitch);

router.get("/:id", getPitchById);

router.put("/:id", updatePitch);

router.delete("/:id", deletePitch);

export default router;
