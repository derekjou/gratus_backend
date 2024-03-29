const express = require('express');
const router = express.Router();
const { User, Post } = require("../models");

router.post("/register", async(req, res) => {
    try{
        await User.findOne({username: req.body.username}, async (err, resp) => {
            if(resp) {
                res.json({ success: false, error: "Username taken" })
            } else {
                const user = new User({
                    name: req.body.name + "",
                    username: req.body.username + "",
                    password: req.body.password + ""
                })
                await user.save();
                res.json({ success: true });
            }
        })
    } catch(e) {
        console.log('Error creating new user', e);
        res.json({ success: false, error: e });
    }
});

router.post("/login", async(req, res) => {
    try{
        User.findOne({username: req.body.username, password: req.body.password}, async(err,resp) => {
            if(resp){
                res.json({ success: true });
            } else{
                res.json({ success: false, error: "User does not exist" })
            }
        })
    } catch(e) {
        console.log("Error finding user", e);
        res.json({ success: false, error: e });
    }
})


module.exports = router;
