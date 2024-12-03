const express = require('express');
const { placeOrder, getOrder } = require('../controllers/ordercontroller');
const router = express.Router();

router.post('/', placeOrder);
router.get('/:id', getOrder);

module.exports = router;
