import orderModel from './../models/orderModel.js'

// Placing user order
const placeOrder = async (req, res) => {
  try {
    const newOrder = new orderModel({
      userId: req.body.userId,
      items: req.body.items,
      amount: req.body.amount,
      address: req.body.address,
      payment: false, // Default payment status
    })

    await newOrder.save()
    res.json({ success: true, message: 'Order placed successfully' })
  } catch (error) {
    console.log(error)
    res.json({ success: false, message: 'Error placing order' })
  }
}

// User orders
const userOrders = async (req, res) => {
  try {
    const orders = await orderModel.find({ userId: req.body.userId })
    res.json({ success: true, data: orders })
  } catch (error) {
    console.log(error)
    res.json({ success: false, message: 'Error fetching orders' })
  }
}

// Listing orders
const listOrders = async (req, res) => {
  try {
    const orders = await orderModel.find({})
    res.json({ success: true, data: orders })
  } catch (error) {
    console.log(error)
    res.json({ success: false, message: 'Error fetching orders' })
  }
}

// Updating order status
const updateStatus = async (req, res) => {
  try {
    await orderModel.findByIdAndUpdate(req.body.orderId, {
      status: req.body.status,
    })
    res.json({ success: true, message: 'Status Updated' })
  } catch (error) {
    console.log(error)
    res.json({ success: false, message: 'Error updating status' })
  }
}

// Export functions
export { listOrders, placeOrder, updateStatus, userOrders }
