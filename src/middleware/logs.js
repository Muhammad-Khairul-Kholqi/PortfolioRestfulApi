const logRequest = (req, res, next) => {
    console.log('Terjadi request ke path', req.path);
    next();
}

module.exports = logRequest;