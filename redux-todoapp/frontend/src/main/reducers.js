import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    todo: () => ({
        description: 'Ler Livro',
        list: [{
            _id: 1,
            description: 'Pagar Fatura do Cartão',
            done: true
        }, {
            _id: 2,
            description: 'Jogar Csgo',
            done: false
        }, {
            _id: 3,
            description: 'Estudar React',
            done: false
        }]
    }),
});

export default rootReducer;
