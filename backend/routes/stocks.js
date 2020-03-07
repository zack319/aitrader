const router = require('express').Router();
let Stock = require('../models/stocks.model');

router.route('/').get((req, res) => {
    Stock.find()
        .then(stocks => res.json(stocks))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const name = req.body.name;
    const indice = req.body.indice;
    const value = req.body.value;
    const userId = req.body.userId;
    const date = req.body.date;

    const newStock = new Stock({
        name,
        indice,
        value,
        userId,
        date
    });

    newStock.save()
        .then(() => res.json('Stock was added successfully!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    // let query = {
    //     indice: req.params.indice
    // };
    let stockId = req.params.id;

    Stock.findById(stockId)
    .then(stock => res.json(stock))
    .catch(err => res.status(400).json('Error: ' + err))
});

router.route('/update/:id').post((req, res) => {
    // let query = {
    //     indice: req.params.indice
    // };
    let stockId = req.params.id

    Stock.findById(stockId)
    .then(stock => {
        stock.userId = req.body.userId;

        if (req.body.value) {
            stock.value = req.body.value;
        }
        if (req.body.date) {
            stock.date = req.body.date;
        }

        stock.save()
        .then(() => res.json({
            stock: stock,
            message: stock.name + " was updated successfully."
        }))
        .catch(err => res.status(400).json('Error ' + err));
    })
    .catch(err => res.status(400).json('Error ' + err))
});

module.exports = router;
