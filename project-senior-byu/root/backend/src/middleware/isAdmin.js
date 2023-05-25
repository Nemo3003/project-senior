const isAdmin = (req, res, next) => {
    // Get the user's id from the session
    const userId = req.session.userId;
  
    // Query the database to get the user's information
    db.query("SELECT * FROM users WHERE id = ?", [userId], (err, data) => {
      if (err) {
        console.log("Database query error:", err);
        return res.status(500).json({ error: "Database query error" });
      }
  
      // Populate the `user` property on the `req` object
      req.user = data[0];
  
      // Check if the user is an admin
      if (req.user && req.user.isAdmin) {
        // User is an admin, proceed to the next middleware/route handler
        next();
      } else {
        // User is not an admin, return an error response
        return res.redirect('/courses');
      }
    });
  };

  module.exports = isAdmin