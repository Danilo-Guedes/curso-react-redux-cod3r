const BillingCycle = require('./billingCycle');

BillingCycle.methods(['get', 'post', 'put', 'delete']);
BillingCycle.updateOptions({ new: true, runValidators: true });

BillingCycle.route('get', (req, res, next) => {
    BillingCycle.find({}, (err, docs) => {
        if (!err) {
            res.json(docs);
        } else {
            res.status(500).json({ errors: [error] });
        }
    });
});

BillingCycle.route('count', (req, res, next) => {
    BillingCycle.count((error, value) => {
        if (error) {
            res.status(500).json({ errors: [error] });
        } else {
            res.json({ value });
        }
    });
});

BillingCycle.route('summary', (req, res, next) => {
    BillingCycle.aggregate({
        $project: {credit: {$sum: "$credits.value"}, debt: {$sum: "$debts.value"}}, // RETORNA UMA LISTA COM A SOMA DE CADA MÊS
        
    }, {
    $group: {_id: null, credit: {$sum: "$credit"}, debt: {$sum: "$debt"}} // AGRUPA A LISTA EM UM UNICO VALOR DE CREDIT E DEBT, TIPO UM REDUCE
    }, {
     $project: {_id: 0, credit: 1, debt: 1} // SETTA O ID COMO FALSE E OS OUTROS ITENS COMO TRUE
     // $project: {_id: false, credit: true, debt: true}
    },
    (error, result) => { //TRATA O ERRO
        if(error){
            res.status(500).json({errors: [error]})
        } else {
            res.json(result || {credit: 0, debit: 0})
        }
    }

    )

})

module.exports = BillingCycle;
