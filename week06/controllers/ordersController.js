let orders = [];
let nextId = 1;

exports.getAllOrders = (req, res) => {
  res.json(orders);
};

exports.getOrder = (req, res) => {

  const order = orders.find(o => o.id == req.params.id);

  if (!order) {
    return res.status(404).json({
      error: {
        code: "NOT_FOUND",
        message: "Order not found"
      }
    });
  }

  res.json(order);

};

exports.createOrder = (req, res) => {

  const { userId, products } = req.body || {};

  if (!userId || !products) {
    return res.status(400).json({
      error: {
        code: "INVALID_INPUT",
        message: "userId and products required"
      }
    });
  }

  const newOrder = {
    id: nextId++,
    userId: userId,
    products: products,
    status: "pending"
  };

  orders.push(newOrder);

  res.status(201).json(newOrder);

};

exports.updateOrder = (req, res) => {

  const order = orders.find(o => o.id == req.params.id);

  if (!order) {
    return res.status(404).json({
      error: {
        code: "NOT_FOUND",
        message: "Order not found"
      }
    });
  }

  if (req.body.status) {
    order.status = req.body.status;
  }

  res.json(order);

};

exports.deleteOrder = (req, res) => {

  const index = orders.findIndex(o => o.id == req.params.id);

  if (index === -1) {
    return res.status(404).json({
      error: {
        code: "NOT_FOUND",
        message: "Order not found"
      }
    });
  }

  orders.splice(index, 1);

  res.status(204).send();

};