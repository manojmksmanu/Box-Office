const express = require('express');
const zod = require('zod');
const { Movie, User } = require('../db');
const { authMiddleware } = require('../middlewares');



const router = express.Router();

const showBody = zod.object({
    userId: zod.string().regex(/^[0-9a-fA-F]{24}$/, "Invalid ObjectId"), // Validate as a MongoDB ObjectId
    favouriteId: zod.number(),
    showName: zod.string()
})

router.post("/show",authMiddleware, async (req, res) =>{
    const { success } = showBody.safeParse(req.body);
    console.log(success)
    if (!success) {
        return res.status(411).json({
            message: "something went wrong"
        })
    }


    const existingFavouriteId = await Movie.findOne({
        favouriteId: req.body.favouriteId
    })

    if (existingFavouriteId) {
        return res.status(411).json({
            message:"You already added this show"
        })
    }


    const movie = await Movie.create({
        userId:req.userId,
        favouriteId:req.body.favouriteId,
        showName:req.body.showName,
    })
    
    res.json({
        message: "Show added successfully",
        // token: token
    })

})

router.delete('/show/delete', authMiddleware, async (req, res) => {
    const { favouriteId, showName } = req.query; // Changed to req.query
    const userId = req.userId;

    if (!favouriteId || !showName) {
        return res.status(400).json({ error: 'favouriteId and showName are required' });
    }

    try {
        const result = await Movie.deleteOne({
            userId: userId,
            favouriteId: favouriteId,
            showName: showName
        });

        if (result.deletedCount === 0) { // Changed to result.deletedCount
            return res.status(404).json({ error: 'Show not found' });
        }

        return res.status(200).json({ message: 'Show deleted successfully' });
    } catch (error) {
        console.error('Error deleting show:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
});









module.exports = router;