const express = require ("express");
const router = express.Router();

const Post = require ("../models/post.model")


router.get("/", async (req, res) => {
    const posts = await Post.find().lean().exec();

    return res.status(200).json({data: posts})
})

router.get("/:id", async (req, res) => {
    try{
        const post = await Post.findById(req.params.id).lean().exec();
        res.status(200).json({post})
    } catch (err) {
        res.status(400).json({message: err.message})
    }
})

router.post("/", async (req, res) => {
    const post = await Post.create(req.body);

    return res.status(201).json({data: post})
})

router.patch("/:id/update", async (req, res) => {
    try{
        const post = await Post.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.status(201).json({post})
    } catch (err) {
        res.status(400).json({message: err.message})
    }
})

router.delete("/:id", async (req, res) => {
    try {
        const post = await Post.findByIdAndDelete(req.params.id)
        res.status(204).json({post})
    } catch (err) {
        res.status(400).json({message: err.message})

    }
})

module.exports = router