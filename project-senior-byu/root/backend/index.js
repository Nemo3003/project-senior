const express = require('express');
const bodyParser = require('body-parser');
const { User } = require('./models'); // Assuming you have a User model defined

const app = express();
app.use(bodyParser.json());

// Route for handling user registration
app.post('/register', async (req, res) => {
  const { name, email, password, isStudent } = req.body;
  try {
    // Create a new user record in the database
    const user = await User.create({
      name,
      email,
      password,
      isStudent
    });
    // Send a success response to the client
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    // Handle errors that may occur during the registration process
    console.error(error);
    res.status(500).json({ message: 'Error registering user' });
  }
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
