let products = [];
let nextId = 1;

exports.getAllProducts = (req, res) => {

  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || products.length;

  const start = (page - 1) * limit;

  const data = products.slice(start, start + limit);

  res.json({
    data: data,
    meta: {
      page: page,
      limit: limit,
      total: products.length
    }
  });

};

exports.getProduct = (req, res) => {

  const product = products.find(p => p.id == req.params.id);

  if (!product) {
    return res.status(404).json({
      error: {
        code: "NOT_FOUND",
        message: "Product not found"
      }
    });
  }

  res.json(product);

};

exports.createProduct = (req, res) => {

  const { name, price } = req.body || {};

  if (!name || !price) {
    return res.status(400).json({
      error: {
        code: "INVALID_INPUT",
        message: "name and price are required"
      }
    });
  }

  const newProduct = {
    id: nextId++,
    name: name,
    price: price
  };

  products.push(newProduct);

  res.status(201).json(newProduct);

};

exports.updateProduct = (req, res) => {

  const product = products.find(p => p.id == req.params.id);

  if (!product) {
    return res.status(404).json({
      error: {
        code: "NOT_FOUND",
        message: "Product not found"
      }
    });
  }

  if (req.body.name) product.name = req.body.name;
  if (req.body.price) product.price = req.body.price;

  res.json(product);

};

exports.deleteProduct = (req, res) => {

  const index = products.findIndex(p => p.id == req.params.id);

  if (index === -1) {
    return res.status(404).json({
      error: {
        code: "NOT_FOUND",
        message: "Product not found"
      }
    });
  }

  products.splice(index, 1);

  res.status(204).send();

};