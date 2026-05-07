module.exports = (req, res, next) => {
  const { name, price } = req.body;

  if (!name || !price) {
    return res.status(400).json({
      error: {
        code: "INVALID_INPUT",
        message: "name and price are required"
      }
    });
  }

  next();
};