import express from 'express';
import { Redirect, AddUrl, LandPage } from '../controllers/url';

const router = express.Router();

router.get('/:shortId', Redirect);

router.get('/', LandPage);

router.post('/', AddUrl);

export { router as urlRouter };
