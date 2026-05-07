module.exports = (req, res, next) => {
  const apiKey = req.headers["x-api-key"];

  const protectedRoutes = ["POST", "PATCH", "DELETE"];

  if (protectedRoutes.includes(req.method)) {
    if (apiKey !== "12345") {
      return res.status(401).json({
        error: {
          code: "UNAUTHORIZED",
          message: "Invalid or missing API key"
        }
      });
    }
  }

  next();
};