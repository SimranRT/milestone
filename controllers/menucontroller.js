let menu = [];

exports.addMenuItem = (req, res) => {
    const { name, price, category } = req.body;

    if (!name || !price || !category || price <= 0) {
        return res.status(400).json({ status: 'error', error: 'Invalid menu item data' });
    }

    const existingItem = menu.find(item => item.name === name);
    if (existingItem) {
        existingItem.price = price;
        existingItem.category = category;
        return res.json({ status: 'success', data: existingItem });
    }

    const newItem = { id: menu.length + 1, name, price, category };
    menu.push(newItem);
    res.json({ status: 'success', data: newItem });
};

exports.getMenu = (req, res) => {
    res.json({ status: 'success', data: menu });
};
