module.exports = function(sequelize, DataTypes) {

    let alias = 'Order'

    let columns = {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        customers_name: {
            type: DataTypes.STRING(50),
        },
        item: {
            type: DataTypes.STRING(50),
        },
        quantity: {
            type: DataTypes.INTEGER
        },
        status: {
            type: DataTypes.ENUM('pending', 'completed', 'canceled')
        }
    }

    let config = {
        timestamps: true,
        updatedAt: false,
        tablename: 'orders'
    }

    const Order = sequelize.define(alias, columns, config);

    return Order;
}