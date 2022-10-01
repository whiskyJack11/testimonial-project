import express from 'express';

import {getTestimonials, createTestimonial} from '../controllers/testimonials.js';

const router = express.Router();

// localhost: 5000/posts
router.get('/', getTestimonials);
router.post('/', createTestimonial);
export default router;