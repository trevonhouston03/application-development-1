module.exports = function (req, res, next) {

  const time = new Date().toISOString();

  console.log(`[${time}] ${req.method} ${req.path}`);

  next();

};