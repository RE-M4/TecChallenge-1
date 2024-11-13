/** imports */
const express = require('express');
const path = require('path');
const cors = require('cors');
const methodOverride = require('method-override');

const ordersRouter = require('./src/routes/orders');

/** config */
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use(express.json());
app.use(cors());

app.use(ordersRouter);

app.listen(3000, () => {
    console.log("Server Running");
})
    