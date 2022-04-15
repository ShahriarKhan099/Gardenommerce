const OrderModel = require('../models/OrderModel')

const addOrder= (req, res) => {
    let newOrder = new OrderModel({
        userEmail: req.body.userEmail,
        orderDate: new Date().toISOString().slice(0, 10),
        plantName: req.body.plantName,
        plantAuthor: req.body.plantAuthor,
        plantPrice: req.body.plantPrice
    })

    newOrder.save()
        .then(result => {
            res.status(201).json({
                massage: 'Order Placed Successful',
                user: result
            })
        })
        .catch(error => {
            res.json(error)
        })

}

const getAllOrders = (req, res) => {
    let userEmail = req.query.email
    OrderModel.find({userEmail})
        .then(orders => {
            res.status(200).json({
                massage: 'All Orders',
                orders
            })
        })
        .catch(error => {
            res.json(error)
        })
}

module.exports = {
    addOrder,
    getAllOrders
}
