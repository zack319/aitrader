const router = require('express').Router();
let Stock = require('../models/stocks.model');

router.route('/').get((req, res) => {
    let query = {
        userId : '5e5361bc97ab544798349ccf'
    };

    Stock.find(query)
        .then(stocks => res.json(stocks))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    let query = {
        userId: "5e5361bc97ab544798349ccf"
    };
    let stockId = req.params.id

    Stock.findById(stockId)
    .then(stock => {
        stock.userId = req.body.userId;

        stock.save()
        .then(() => {
            Stock.find(query)
                .then(stocks => res.json(stocks))
                .catch(err => res.status(400).json('Error ' + err))
        })
        .catch(err => res.status(400).json('Error ' + err));
    })
    .catch(err => res.status(400).json('Error ' + err))
});

module.exports = router;
