const express = require('express');
const bodyParser = require('body-parser');
const menuRoutes = require('./Routes/menu');  // Correct path for menuRoutes
const orderRoutes = require('./Routes/order'); // Ensure correct orderRoutes path
const { setupOrderStatusUpdates } = require('./utils/cronjobs');

const app = express();
const PORT = 5001;

let menu = [];
let order = [];

app.use(bodyParser.json());

app.use('/menu', menuRoutes);  // Routes for adding and getting menu items
app.use('/orders', orderRoutes);  // Routes for orders (if any)

setupOrderStatusUpdates(orders);

app.listen(PORT, () => {
    console.log(`Server is running at http://127.0.0.1:${PORT}`);
});
