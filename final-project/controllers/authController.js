const db = require("../db");

exports.login = (req, res) => {
  const { email, password } = req.body;

  db.get(
    "SELECT * FROM users WHERE email = ? AND password = ?",
    [email, password],
    (err, user) => {
      if (err) {
        return res.status(500).json({
          error: {
            code: "SERVER_ERROR",
            message: "Database error."
          }
        });
      }

      if (!user) {
        return res.status(401).json({
          error: {
            code: "INVALID_CREDENTIALS",
            message: "Invalid email or password."
          }
        });
      }

      req.session.user = {
        email: user.email,
        role: user.role
      };

      res.json({
        message: "Login successful.",
        user: req.session.user
      });
    }
  );
};

exports.logout = (req, res) => {
  req.session.destroy(() => {
    res.json({
      message: "Logout successful."
    });
  });
};

exports.profile = (req, res) => {
  res.json({
    user: req.session.user
  });
};