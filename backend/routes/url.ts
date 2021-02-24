import express from "express";
import { Redirect, AddUrl } from "../controllers/url";

const router = express.Router();

router.get("/:shortId", Redirect);

router.post("/", AddUrl);

export { router as urlRouter };
