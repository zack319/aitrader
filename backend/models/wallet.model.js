const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const walletSchema = new Schema({
    userId: {type: String, required: true},
    money: {type: Number, required: true}
}, {
    timestamps: true
});

const Wallet = mongoose.model('Wallet', walletSchema);

module.exports = Wallet;
