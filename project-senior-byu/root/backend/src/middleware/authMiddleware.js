const jwt = require('jsonwebtoken');
const { JWT_SECRET } = process.env;

const authMiddleware = (req, res, next) => {
  // Get the token from the request headers or query parameters
  const token = req.headers.authorization || req.query.token;

  if (!token) {
    return res.redirect('/courses');
  }

  try {
    // Verify the token and decode the user information
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded; // Set the decoded user object to req.user
    next();
  } catch (err) {
    return res.redirect('/courses');
  }
};

module.exports = authMiddleware;
