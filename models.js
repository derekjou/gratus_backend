const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

const postSchema = new Schema({
    userId: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    image: {
        // To be filled in
    }
})

const User = mongoose.model("User", userSchema);
const Post = mongoose.model("Post", postSchema);

module.exports = {
    User,
    Post
}