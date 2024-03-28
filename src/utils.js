const jwt = require("jsonwebtoken");
const secretKey = "thisismysecretkey";
function generateToken(User) {
  return jwt.sign({ sub: User.id }, secretKey, { expiresIn: "1h" });
}
function authenticateAndAuthorize(req, res, next) {
  const auth = req.header("Authorization");
  if (!auth) {
    return res.status(401).json({ message: "No token provided" });
  }
  const parts = auth.split(" ");
  if (parts.length !== 2 || parts[0] !== "Bearer") {
    return res
      .status(401)
      .json({ error: "Authorization format is Bearer <token>" });
  }
  const token = parts[1];
  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      console.log(err);
      console.log(token);
      return res.status(401).json({ message: "Unauthorized - Invalid token" });
    }
  });
  next();
}
module.exports = { generateToken, authenticateAndAuthorize };
