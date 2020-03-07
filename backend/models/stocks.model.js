const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const stockSchema = new Schema({
    name: {type: String, required: true},
    indice: {type: String, required: true},
    value: {type: Number, required: true},
    userId: {type: String},
    date: {type: Date, required: true}
}, {
    timestamps: true
});

const Stock = mongoose.model('Stock', stockSchema);

module.exports = Stock;
