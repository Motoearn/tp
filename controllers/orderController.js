const ordersModel = require("../models/orderModel");

//add items
const addordersController = async (req, res) => {
  try {
    const neworder = new ordersModel(req.body);
    await neworder.save();
    res.send("Order Placed Successfully!");
  } catch (error) {
    res.send("something went wrong");
    console.log(error);
  }
};

//get blls data
const getordersController = async (req, res) => {
  try {
    const { tableNumber } = req.query;
    let orders;

    if (tableNumber) {
      // If tableNumber is provided, filter orders by table number
      orders = await ordersModel.find({ tableNumber: tableNumber });
    } else {
      // If no tableNumber provided, get all orders
      orders = await ordersModel.find();
    }

    res.send(orders);
  } catch (error) {
    console.log(error);
    res.status(500).send('Internal server error');
  }
};

const editordersController = async (req, res) => {
    try {
      const { orderId } = req.body;
      console.log(orderId);
      await ordersModel.findOneAndUpdate({ _id: orderId }, req.body, {
        new: true,
      });
  
      res.status(201).json("order Updated");
    } catch (error) {
      res.status(400).send(error);
      console.log(error);
    }
  };

  const findTableNumber =async (req, res) => {
    try {
      const tableNumber = req.query.tableNumber;
      const orders = await ordersModel.find({ tableNumber: tableNumber });
      res.json(orders);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  };
  
module.exports = {
  addordersController,
  getordersController,
  editordersController,
};