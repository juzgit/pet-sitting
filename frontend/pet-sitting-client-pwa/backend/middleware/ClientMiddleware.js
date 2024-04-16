const ValidUsername = (req, res, next) => {
    console.log('Request body:', req.body);

    if(!req.body.username){
        return res.status(403).json({ message: 'Invalid username.'});
    }

    const username = req.body.username;

    if(!username.endsWith('@gmail.com')){
        return res.status(403).json({ message: 'Invalid email address.'})
    }

    next();

}

module.exports = ValidUsername;