import User from '../model/auth.js';
import { token } from '../middleware/jwt.js';
import { compare } from 'bcrypt';


export async function postSignUp(req, res, next) {
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
                    "data": { "token": token(json.email) }
                });
            }
        })
    // .catch(err => {
    //     res.status(200).json({"status" : "nok"});
    // });

}

export async function postSignIn(req, res, next) {
    const json = req.body;
    await User.findOne({ email: json.email })
        .then(async userDoc => {
            if (compare(json.key, userDoc.key)) {
                res.status(200).json({
                    "status": "ok",
                    "data": { "token": token(json.email) }
                });
            }
            else {
                res.status(200).json({
                    "status": "no_user"
                })
            }
        });
}

export async function postWithdrawal(req, res, next) {
    await User.findOneAndRemove(email);
    res.status(200).json({
        "status": "ok",
    });
}

