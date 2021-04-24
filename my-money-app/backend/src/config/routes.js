const express = require('express');

module.exports = function (server) {
    // definindo URL BASE para todas as rotas
    const router = express.Router();

    server.use('/api', router);

    //definindo as rotas do CICLO DE PAGAMENTOS
    const BillingCycle = require('../api/billingCycle/billingCycleServices');
    BillingCycle.register(router, '/billingCycles');
};
