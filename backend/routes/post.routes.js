import express from 'express';
import { protectRoute } from '../middleware/protectRoute.js';
import { commentOnPost, createPost, deletePost, getAllPost, getFollowingPosts, getLikePosts, getUserPosts, likeUnlikePost } from '../controllers/post.controller.js';

const router = express.Router();

router.get('/all', protectRoute, getAllPost);
router.get('/following', protectRoute, getFollowingPosts);
router.get('/likes/:id', protectRoute, getLikePosts)
router.get('/user/:username', protectRoute, getUserPosts)
router.post('/create', protectRoute, createPost);
router.post('/like/:id', protectRoute, likeUnlikePost);
router.post('/comment/:id', protectRoute, commentOnPost);
router.delete('/:id', protectRoute, deletePost);

export default router;