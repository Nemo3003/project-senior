
const { auth } = require('express-oauth2-jwt-bearer');


const jwtCheck = auth({
  secret: process.env.AUTH0_SECRET,
  audience: process.env.AUTH0_AUDIENCE,
  issuerBaseURL: process.env.AUTH0_URL,
  tokenSigningAlg: process.env.AUTH0_TOKEN
});

// enforce on all endpoints
app.use(jwtCheck);

app.get('/authorized', function (req, res) {
    res.send('Secured Resource');
});