 const jwt = require('jsonwebtoken')
 const dotenv = require('dotenv');
 dotenv.config();
 
 
 const verifyToken = async (req, res, next) =>{
    const token = req.headers["x-access-token"];

    console.log(token)

    if(!token) return res.status(403).json({message: "No token provided"})

    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    console.log(decoded)
    req.userId =  decoded.id

    const user = await user.findById(req.userId, {password: 0})
    if(!user) return res.status(404).json({message: "No user found"})
    
    next();
}

module.exports = verifyToken;