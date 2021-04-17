import { createStore, combineReducers } from 'redux';

const reducers = combineReducers({
    numeros: function (state, action) {
        console.log(state, ' ', action);
        return {
            min: 0,
            max: 666,
        };
    },
    nomes: function (state, action) {
        // console.log(state, ' ', action);
        return ['Ana', 'Bia', 'Carlos'];
    },
});

function storeConfig() {
    return createStore(reducers);
}

export default storeConfig;
