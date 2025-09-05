const customers = require('../../customers'); // customers.js in root

function getAllCustomer(req, res) {
    let result = customers;

    if (req.query.gender) {
        result = result.filter(c => c.gender === req.query.gender);
    }

    if (req.query.age) {
        result = result.filter(c => {
            if (!c.birthday) return false;
            const birthYear = new Date(c.birthday).getFullYear();
            const age = new Date().getFullYear() - birthYear;
            return age == req.query.age;
        });
    }
    

    if (req.query.startDate && req.query.endDate) {
        result = result.filter(c => {
            const created = new Date(c.createdAt);
            const start = new Date(req.query.startDate);
            const end = new Date(req.query.endDate);
            return created >= start && created <= end;
        });
    }

    res.json(result);
}

function getCustomerById(req, res) {
    const { id } = req.params;
    const customer = customers.find(c => c.id == id);
    customer ? res.json(customer) : res.status(404).json({ message: "Customer not found" });
}

module.exports = { getAllCustomer, getCustomerById };
