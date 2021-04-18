import { createStore, combineReducers } from 'redux';

const reducers = combineReducers({
    numeros: function (state, action) {
        console.log(state, ' ', action);
        console.log('Reducer de numeros foi chamado...');

        switch(action.type){
            case 'NUM_MIN_ALTERADO':
                return {
                    ...state,
                    min: action.payload
                }
            case 'NUM_MAX_ALTERADO':
                return {
                    ...state,
                    max: action.payload
                }
            default:   
                return {
                min: 0,
                max: 666,
            }
        }

      
    },
    nomes: function (state, action) {
        console.log(state, ' ', action);
        console.log('Reducer de numeros foi chamado...');
        return ['Ana', 'Bia', 'Carlos'];
    },
});

function storeConfig() {
    return createStore(reducers);
}

export default storeConfig;
