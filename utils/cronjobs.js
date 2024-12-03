const cron = require('node-cron');

exports.setupOrderStatusUpdates = (orders) => {
    cron.schedule('*/10 * * * * *', () => { // Runs every 10 seconds for testing
        order.forEach(order => {
            if (order.status === 'Preparing') {
                order.status = 'Out for Delivery';
            } else if (order.status === 'Out for Delivery') {
                order.status = 'Delivered';
            }
        });
        console.log('Order statuses updated:', orders);
    });
};
