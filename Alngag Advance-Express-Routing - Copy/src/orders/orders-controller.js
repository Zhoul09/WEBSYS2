const orders = require('../../orders');

function getAllOrders(req, res) {
    let result = orders;


    if (req.query.status) {
        const status = req.query.status.toLowerCase();
        result = result.filter(o => o.status.toLowerCase() === status);
    }


    if (req.query.minTotal && req.query.maxTotal) {
        const min = parseFloat(req.query.minTotal);
        const max = parseFloat(req.query.maxTotal);

        result = result.filter(o => {
            const total = parseFloat(o.totalAmount); 
            return !isNaN(total) && total >= min && total <= max;
        });
    }

    res.json(result);
}

function getOrderById(req, res) {
    const { id } = req.params;
    const order = orders.find(o => o.id == id);
    order ? res.json(order) : res.status(404).json({ message: "Order not found" });
}

module.exports = { getAllOrders, getOrderById };
