const products = require('../../products');

function getAllProducts(req, res) {
    let result = products;

    if (req.query.name) {
        const name = req.query.name.toLowerCase();
        result = result.filter(p => p.name.toLowerCase().includes(name));
    }

    if (req.query.description) {
        const desc = req.query.description.toLowerCase();
        result = result.filter(p => p.description.toLowerCase().includes(desc));
    }

    if (req.query.minPrice && req.query.maxPrice) {
        const min = parseFloat(req.query.minPrice);
        const max = parseFloat(req.query.maxPrice);
        result = result.filter(p => p.price >= min && p.price <= max);
    }

    if (req.query.minStock && req.query.maxStock) {
        const min = parseInt(req.query.minStock);
        const max = parseInt(req.query.maxStock);
        result = result.filter(p => p.stock >= min && p.stock <= max);
    }

    res.json(result);
}

function getProductById(req, res) {
    const { id } = req.params;
    const product = products.find(p => p.id == id);
    product ? res.json(product) : res.status(404).json({ message: "Product not found" });
}

module.exports = { getAllProducts, getProductById };
