const User = require('../model/auth');
const jwt = require('../middleware/jwt');
const bcrypt = require('bcrypt');
require("dotenv").config();

exports.postSignUp = async (req, res, next) => {
    const json = req.body;

    await User.findOne({ email: json.email })
        .then(async userDoc => {
            if (userDoc) {
                res.status(200).json({ "status": "user_duplicate" });
            }
            else {
                await new User(json).save();
                res.status(200).json({
                    "status": "ok",
                    "data": { "token": jwt.token(json.email) }
                });
            }
        })
    // .catch(err => {
    //     res.status(200).json({"status" : "nok"});
    // });

};

exports.postSignIn = async (req, res, next) => {
    const json = req.body;
    await User.findOne({ email: json.email })
        .then(async userDoc => {
            if (bcrypt.compare(json.key, userDoc.key)) {
                res.status(200).json({
                    "status": "ok",
                    "data": { "token": jwt.token(json.email) }
                });
            }
            else {
                res.status(200).json({
                    "status": "no_user"
                })
            }
        });
};

exports.postWithdrawal = async (req, res, next) => {
    await User.findOneAndRemove(email);
    res.status(200).json({
        "status": "ok",
    });
};

