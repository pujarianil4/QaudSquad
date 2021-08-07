const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    user: {type: mongoose.Schema.Types.ObjectId, ref: "user", required: true},
    category: {type: String, required: true},
    startFrom : {type: String, required: true},
    level: {type: String, required: true},   
     
}, {
    versionKey: false,
    timestamps: true
})

const Post = mongoose.model("post", postSchema);

module.exports = Post;