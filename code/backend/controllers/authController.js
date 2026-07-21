const Admin = require("../models/Admin");

// TEMP: No password hashing yet (we add hashing later)
exports.login = async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const admin = await Admin.findOne({ username: username });

  if (!admin) {
    return res.status(400).json({ error: "User not found" });
  }

  if (admin.password !== password) {
    return res.status(400).json({ error: "Incorrect password" });
  }

  return res.json({ message: "Login successful" });
};
