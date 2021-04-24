const restful = require('node-restful');
const mongoose = restful.mongoose;

const creditSchema = new mongoose.Schema({
    name: { type: String, required: [true, 'O nome do crédito é obrigatório.'] },
    value: { type: Number, required: [true, 'O valor do crédito é obrigatório.'], min: 0 },
});

const debtSchema = new mongoose.Schema({
    name: { type: String, required: [true, 'O nome do débito é obrigatório.'] },
    value: { type: Number, min: 0, required: [true, 'O valor do débito é obrigatório.'] },
    status: {
        type: String,
        required: false,
        uppercase: true,
        enum: ['PAGO', 'PENDENTE', 'AGENDADO'],
    },
});

const billingCycleSchema = new mongoose.Schema({
    name: { type: String, required: true },
    month: { type: Number, min: 1, max: 12, required: true },
    year: { type: Number, min: 1970, max: 2100, required: true },
    credits: [creditSchema],
    debts: [debtSchema],
});

module.exports = restful.model('BillingCycle', billingCycleSchema);
