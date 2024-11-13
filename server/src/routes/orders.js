const express = require('express');
const router = express.Router();
const ordersController = require('../controllers/ordersController');

router.get('/orders', ordersController.all);
router.get('/orders/:id', ordersController.detail);
router.post('/orders', ordersController.create);
router.put('/orders/:id', ordersController.update);
router.delete('/orders/:id', ordersController.delete);

module.exports = router;
