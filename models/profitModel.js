const mongoose = require('mongoose');

const profitSchema = new mongoose.Schema({
    planId: { type: String, required: true, unique: true },
    profit: { type: Number, default: 0 },
    startTime: { type: Number, default: Date.now },
});

module.exports = mongoose.model('Profit', profitSchema);
