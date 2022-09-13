import jwt from 'jsonwebtoken';
const { sign, verify } = jwt;

export function token(payload) {
    return sign({
        payload
    },
        process.env.SECRET_KEY);
}

export function payload(token) {
    return verify(token, process.env.SECRET_KEY);
}