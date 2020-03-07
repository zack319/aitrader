const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const picture = req.body.picture;

    const newUser = new User({
        username,
        firstName,
        lastName,
        picture
    });

    newUser.save()
        .then(() => res.json('User was added successfully!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
