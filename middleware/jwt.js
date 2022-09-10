const jwt = require('jsonwebtoken');
require("dotenv").config();


exports.token = (payload) => {
    return jwt.sign({
        payload
    },
        process.env.SECRET_KEY);
}

exports.payload = (token) => {
    return jwt.verify(token, process.env.SECRET_KEY);
}