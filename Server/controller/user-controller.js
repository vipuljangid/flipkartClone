//LOGIN BACKEND

import User from "../model/userSchema.js";
export const userSignup = async (req, res) => {
    try {
        const exist = await User.findOne({ username: req.body.username });
        if (exist) {
            res.status(401).json("Username already exist");
        } else {
            const user = req.body;
            const newUser = new User(user);
            await newUser.save();
            res.status(200).json("user has been regristerd succesfully");
        }
    } catch (error) {
        console.error("Error", error.message);
    }
};

export const userLogin = async (req, res) => {
    try {
        let user = await User.findOne({
            username: req.body.username,
            password: req.body.password,
        });
        if (user) {
            res.status(200).json(`${req.body.username} login succesfull`);
        } else {
            res.status(401).json("Invalid Email or Password");
        }
    } catch (error) {
        console.error("Error:", error.message);
    }
};
