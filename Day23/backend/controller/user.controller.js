const { userModel } = require("../model/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const registration = async (req, res) => {

    const { fullName, email, password, phoneNumber } = req.body;

    if (fullName == "" || email == "" || password == "" || phoneNumber == "") {
        return res.send({ "message": "All fields are required" });
    }

    const existUser = await userModel.findOne({email});

    if(existUser){
        return res.status(400).send({"message":"User already exist"})
    }

    try {
        bcrypt.hash(password, 5,  async function (err, hash) {
            if (err) {
                return res.send({ "message": "There is error while creating account" })
            } else {
                const user = new userModel({ fullName, email, password:hash, phoneNumber });
                await user.save();

                res.status(200).send({ "message": "Registration is completed" })
            }
        });

    } catch (error) {
        res.status(500).send({"message":"Internal server error", error: error.message})
    }
}

const userLogin = async (req, res) => {
    const {email, password} = req.body;
    
    try {
        const existUser = await userModel.findOne({email});
        if(existUser){
            bcrypt.compare(password, existUser.password, function(err, result) {
                if(result){
                    const token = jwt.sign({userId: existUser._id}, process.env.JWT_SECRET, {expiresIn: "1h"});
                    res.status(200).send({"message":"Login successful", user: {user:existUser, token}});
                }else{
                    res.status(400).send({"message":"Invalid credentials"})
                }
            });
        } else {
            res.status(404).send({"message":"User not found"});
        }
    } catch (error) {
        res.status(500).send({"message":"Internal server error", error: error.message})
    }
}

const changePassword = async (req, res) => {
    const { oldPassword, newPassword } = req.body;
    const { userId } = req.headers;

    if (oldPassword == "" || newPassword == "") {
        return res.status(400).send({ "message": "All fields are required" });
    }

    const existUser = await userModel.findById(userId);

    try {
        bcrypt.compare(oldPassword, existUser.password, async function (err, result) {
            if (result) {
                bcrypt.hash(newPassword, 6, async function (err, hash) {
                    if (err) {
                        return res.status(500).send({ "message": "Internal server error", error: err.message });
                    }
                    existUser.password = hash;
                    await existUser.save();
                    res.status(200).send({ "message": "Password changed successfully" });
                });
            } else {
                res.status(400).send({ "message": "Password is incorrect" });
            }
        });
    } catch (error) {
        res.status(500).send({ "message": "Internal server error", error: error.message });
    }
}

const getAllUsers = async (req, res) => {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 5;
    const skip = (page - 1) * limit;

    try {
        const user = await userModel.find().skip(skip).limit(limit).select("-password");

        const totalUser = await userModel.countDocuments();
        const totalPages = Math.ceil(totalUser / limit);

        res.status(200).send({
            "message": "Users fetched successfully",
            "users": user,
            "totalUsers": totalUser,
            "totalPages": totalPages,
            "currentPage": page
        });
    } catch (error) {
        res.status(500).send({ "message": "Internal server error", error: error.message });
    }
}

const forgotPassword = async (req, res) => {
    const { email, newPassword } = req.body;

    if (!email || !newPassword) {
        return res.status(400).send({ "message": "Email and new password are required" });
    }

    try {
        const existUser = await userModel.findOne({ email });

        if (!existUser) {
            return res.status(404).send({ "message": "User not found with this email" });
        }

        bcrypt.hash(newPassword, 6, async function (err, hash) {
            if (err) {
                return res.status(500).send({ "message": "Internal server error", error: err.message });
            }
            existUser.password = hash;
            await existUser.save();
            res.status(200).send({ "message": "Password reset successfully" });
        });
    } catch (error) {
        res.status(500).send({ "message": "Internal server error", error: error.message });
    }
}

module.exports = {
    registration,
    userLogin,
    changePassword,
    getAllUsers,
    forgotPassword
}