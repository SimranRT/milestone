let order = [];

exports.placeOrder = (req, res) => {
    const { items } = req.body;

    if (!items || !items.length) {
        return res.status(400).json({ status: 'error', error: 'Order must contain at least one item' });
    }

    const validItems = items.every(itemId => menu.some(menuItem => menuItem.id === itemId));
    if (!validItems) {
        return res.status(400).json({ status: 'error', error: 'Invalid item IDs in order' });
    }

    const newOrder = { id: order.length + 1, items, status: 'Preparing' };
    order.push(newOrder);
    res.json({ status: 'success', data: newOrder });
};

exports.getOrder = (req, res) => {
    const order = order.find(o => o.id === parseInt(req.params.id));
    if (!order) {
        return res.status(404).json({ status: 'error', error: 'Order not found' });
    }
    res.json({ status: 'success', data: order });
};
