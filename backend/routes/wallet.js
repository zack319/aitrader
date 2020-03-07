const router = require('express').Router();
let Wallet = require('../models/wallet.model');

router.route('/').get((req, res) => {
    Wallet.find()
        .then(wallet => res.json(wallet))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Comment temporary method to add wallets since not many users
// implemented yet

// router.route('/add').post((req, res) => {
//     const userId = req.body.userId;
//     const money = req.body.money;
//     const date = req.body.date;

//     const newWallet = new Wallet({
//         userId,
//         money,
//         date
//     });

//     newWallet.save()
//         .then(() => res.json('Wallet has added successfully!'))
//         .catch(err => res.status(400).json('Error: ' + err));
// });

router.route('/update/:id').post((req, res) => {

    Wallet.findById(req.params.id)
    .then(wallet => {
        wallet.userId = req.body.userId;
        wallet.money = req.body.money;


        wallet.save()
        .then(() => res.json('Wallet has been updated!'))
        .catch(err => res.status(400).json('Error ' + err));
    })
    .catch(err => res.status(400).json('Error ' + err))
});

module.exports = router;
