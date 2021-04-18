/* eslint-disable import/no-anonymous-default-export */
import { NUM_MIN_ALTERADO, NUM_MAX_ALTERADO } from '../actions/actionTypes'

const initialState = {
    min: 0,
    max: 666
}

export default function (state = initialState, action) {
    // console.log(state, ' ', action);
    // console.log('Reducer de numeros foi chamado...');

    switch(action.type){
        case NUM_MIN_ALTERADO:
            return {
                ...state,
                min: action.payload
            }
        case NUM_MAX_ALTERADO:
            return {
                ...state,
                max: action.payload
            }
        default:   
            return state
    }

  
}