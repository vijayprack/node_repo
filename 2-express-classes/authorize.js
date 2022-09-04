const authorize = (req, res, next) => {
    console.log('authorize');
    const {user} = req.query
    if (user === 'Vijay') {
        req.user = ({user: "Vijay", id: 26});
        next();
    } else {
        res.status(401).send('Unauthorised');
    };
};

module.exports = authorize;