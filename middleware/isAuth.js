export default (req, res, next) => {
    const token = req.headers.authorization.split('Bearer ')[1];
    if (token) {
        next();
    }
    else throw Error("Not Login");
}