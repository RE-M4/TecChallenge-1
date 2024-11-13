const db = require('../database/models');

const ordersController = {
    all: function(req, res) {
        const page = parseInt(req.query.page) || 1;
        const page_size = parseInt(req.query.page_size) || 3;
        const offset = (page - 1) * page_size;

        db.Order.findAndCountAll({
            offset: offset,
            limit: page_size
        })
        .then(function(orders) {
            res.status(200).json({
                orders: orders.rows.map(({ id, customers_name, item, quantity, status, createdAt }) => ({ id, customers_name, item, quantity, status, createdAt })),
                meta: {
                    totalItems: orders.count,
                    totalPages: Math.ceil(orders.count / page_size),
                    currentPage: page
                }
            });
        })
        .catch(function(error) {
            console.error('Error al obtener las órdenes:', error);
            res.status(500).json({ message: 'Error al obtener las órdenes' });
        });
    },
    detail: function(req, res) {
        db.Order.findByPk(req.params.id)
        .then(function(order) {
            if (!order) {
                return res.status(404).json({ message: 'Orden no encontrada' });
            }
            res.status(200).json({
                id: order.id,
                customers_name: order.customers_name,
                item: order.item,
                quantity: order.quantity,
                status: order.status,
                createdAt: order.createdAt
            });
        })
        .catch(function(error) {
            console.error('Error al obtener la orden:', error);
            res.status(500).json({ message: 'Error al obtener la orden' });
        });
    },
    create: function(req, res) {
        db.Order.create({
            customers_name: req.body.customers_name,
            item: req.body.item,
            quantity: req.body.quantity,
            status: req.body.status
        })
        .then(function(newOrder) {
            res.status(201).json({
                id: newOrder.id,
                customers_name: newOrder.customers_name,
                item: newOrder.item,
                quantity: newOrder.quantity,
                status: newOrder.status,
                createdAt: newOrder.createdAt
            });
        })
        .catch(function(error) {
            console.error('Error al crear la orden:', error);
            if (error.name === 'SequelizeValidationError') {
                res.status(400).json({ message: 'Error de validación al crear la orden', errors: error.errors });
            } else {
                res.status(500).json({ message: 'Error desconocido al crear la orden' });
            }
        });
    },
    update: function(req, res) {
        db.Order.findByPk(req.params.id)
        .then(function(order) {
            if (!order) {
                return res.status(404).json({ message: 'Orden no encontrada' });
            }
            return order.update({
                customers_name: req.body.customers_name || order.customers_name,
                item: req.body.item || order.item,
                quantity: req.body.quantity || order.quantity,
                status: req.body.status || order.status
            });
        })
        .then(function(updatedOrder) {
            res.status(200).json({
                id: updatedOrder.id,
                customers_name: updatedOrder.customers_name,
                item: updatedOrder.item,
                quantity: updatedOrder.quantity,
                status: updatedOrder.status,
                createdAt: updatedOrder.createdAt
            });
        })
        .catch(function(error) {
            console.error('Error al actualizar la orden:', error);
            res.status(500).json({ message: 'Error al actualizar la orden' });
        });
    },
    delete: function(req, res) {
        db.Order.findByPk(req.params.id)
        .then(function(order) {
            if (!order) {
                return res.status(404).json({ message: 'Orden no encontrada' });
            }
            return order.destroy()
            .then(function() {
                res.status(200).json({ message: 'Orden eliminada' });
            })
            .catch(function(error) {
                console.error('Error al eliminar la orden:', error);
                res.status(500).json({ message: 'Error al eliminar la orden' });
            });
        })
        .catch(function(error) {
            console.error('Error al obtener la orden:', error);
            res.status(500).json({ message: 'Error al obtener la orden' });
        });
    }
};

module.exports = ordersController;